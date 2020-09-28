import { createFilter } from 'rollup-pluginutils';
import { preffixForResource, shortLinkTo } from '../shortner/index.js';
import path from 'path';
import fs from 'fs';
import globby from 'globby';
import kebabCase from 'lodash/kebabCase';
import deburr from 'lodash/deburr';
import frontMatter from 'front-matter';
import MarkdownIt from 'markdown-it';
import chalk from 'chalk';
import highlight from './lib/highlight';
import readingTime from 'reading-time';
import moment from 'moment';
import jsdom from 'jsdom';
import containers from './containers/all';

function warn(message) {
    console.log(chalk.yellow(message));
}

function withOutExtension(file) {
    return file.replace(/\.[^/.]+$/, '');
}

function autoSlug(id) {
    return kebabCase(deburr(withOutExtension(id)));
}

function validateMeta(meta, id) {
    if (!meta.title) {
        throw new Error(`All articles must have a title @ ${id}`);
    }

    if (meta.published !== false) {
        if (!meta.id || parseInt(meta.id) <= 0) {
            throw new Error(`All articles must have an unique id @ ${id}`);
        }

        if (!meta.tweet) {
            warn(`The article has no associated tweet yet @ ${id}`);
        }

        if (!meta.date || !moment.utc(meta.date).isValid()) {
            throw new Error(`All published articles must have a date @ ${id}`);
        }

        if (meta.noTags !== true && !meta.tags) {
            throw new Error(`All published articles must have at least one tag @ ${id}`);
        }

        if (!meta.intro) {
            throw new Error(`All published articles must have an introduction @ ${id}`);
        }
    }
}

export function createMarkdownItInstance(options = {}) {
    const finalOptions = { highlight, ...options };

    const markdowContainer = require('markdown-it-container');

    const mdInstance = new MarkdownIt(finalOptions)
        .use(require("markdown-it-anchor"))
        .use(require('markdown-it-emoji'))
        .use(markdowContainer);

    containers.forEach(registerContainer => registerContainer(mdInstance, markdowContainer));

    return mdInstance;
}

export function extractDescription(meta, introHtml) {
    if (meta.description) {
        return meta.description;
    }

    const { document } = (new jsdom.JSDOM(introHtml)).window;

    let description = '';
    document.body.textContent.split('. ').slice(0, 2).forEach((sentence) => {
        if (description.length < 100) {
            description = `${description} ${sentence}.`;
        }
    });

    return description.trim();
}

export function createJsonToc(html, id) {
    const { document } = (new jsdom.JSDOM(html)).window;

    const titles = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7'));

    const plain = titles.map((titleSelector) => ({
        level: parseInt(titleSelector.tagName[1], 10),
        title: titleSelector.textContent,
        anchor: '#' + titleSelector.getAttribute('id'),
    }));


    const tree = [];
    const stack = [];
    const treeItems = plain.map(item => ({ ...item, children: [] }));

    treeItems.forEach((item) => {
        let lastStackItem = null;
        do {
            lastStackItem = stack.pop();
        } while (lastStackItem && lastStackItem.level >= item.level);

        if (!lastStackItem) {
            // Root node
            const prevTreeItem = tree.pop();
            if (prevTreeItem) {
                if (item.level !== prevTreeItem.level) {
                    warn(`The root titles are not in tree structure on markdown file: ${id} on header "${item.title}`);
                }

                tree.push(prevTreeItem);
            }

            tree.push(item);
            stack.push(item);
        } else {
            if (lastStackItem.level !== (item.level - 1)) {
                warn(`The titles are not in tree structure on markdown file: ${id} on header "${item.title}`);
            }

            // Children node
            stack.push(lastStackItem);
            stack.push(item);
            lastStackItem.children.push(item);
        }
    });

    return { tree, plain };
}

export function parseCode(code, id = '', md) {
    const data = frontMatter(code);
    const meta = data.attributes || {};

    validateMeta(meta, id);

    const slug = !meta.slug || meta.slug === 'auto' ?
        autoSlug(id) :
        meta.slug;

    const titleSlug = autoSlug(meta.title);

    const html = md.render(data.body);

    const articleId = meta.id ? parseInt(meta.id, 10) : null;

    const intro = meta.intro ? md.render(meta.intro) : '';

    return {
        id: articleId,
        intro,
        description: extractDescription(meta, intro),
        type: meta.published === false ? 'doc' : 'article',
        note: meta.note === true,
        title: meta.title,
        tweet: meta.tweet || null,
        shortLink: articleId ? shortLinkTo(preffixForResource('articles'), articleId) : null,
        slug,
        toc: createJsonToc(html, id),
        // md: data.body,
        meta: {
            ...meta,
            published: meta.published !== false, // When validated and not unpublished its asumed as published
            slug,
            titleSlug,
            date: moment.utc(meta.date),
            readingStats: readingTime(data.body),
            tags: (meta.tags || ['blog']).map(tag => tag.toLowerCase().trim()),
        },
        // frontMatter: data.frontmatter || '',
        html,
    };
};

export function markdownIt(options = {}) {
    if (!options.docLocation) {
        throw new Error('Doc location is required on markdown rollup plugin');
    }

    const docLocation = fs.realpathSync(options.docLocation);

    if (!fs.existsSync(docLocation)) {
        throw new Error(`The directory "${options.docLocation}" does not exist`);
    }

    const docGlob = options.include || `**/*.md`;
    const filter = createFilter(docGlob);
    const virtualModule = options.virtualModule || '@virtual-markdown-it';
    const mustLog = !options.disableLog;
    const md = createMarkdownItInstance(); // TODO: Markdown it options

    return {
        name: "markdownIt",
        resolveId(source) {
            if (source !== virtualModule) {
                return null;
            }

            return source;
        },
        load(id) {
            if (id !== virtualModule) {
                return null;
            }

            // Watch for markdown changes
            this.addWatchFile(docLocation);

            const dynamicImports = globby.sync(docGlob, { cwd: docLocation })
                .map(relative => {
                    const absolutePath = path.resolve(docLocation, relative);
                    const basename = path.basename(absolutePath, '.md');

                    return `{
                        resolve: () => import('${absolutePath}'),
                        absolute: '${absolutePath}',
                        relative: '${relative}',
                        basename: '${basename}',
                    }`;
                });

            const moduleCode = `export default [
                ${dynamicImports.join(',' + "\n")}
            ];`

            return moduleCode;
        },
        transform(code, id) {
            if (filter(id)) {
                const logLabel = `> ${chalk.green('Markdown file parsed:')} ${chalk.blue(id)}`;

                if (mustLog) {
                    console.time(logLabel);
                }

                const parsed = parseCode(code, path.basename(id), md);

                if (mustLog) {
                    console.timeEnd(logLabel);
                }

                return {
                    code: `export default ${JSON.stringify(parsed)};`,
                    map: { mappings: "" }
                };
            }
        },
    };
}
