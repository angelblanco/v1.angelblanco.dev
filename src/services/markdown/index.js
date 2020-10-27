import moment from 'moment';
import locations from './locations';
import resolveFiles from './functions/resolveFiles';

/*
 * The articles services that handle articles operations as rendering markdown. This service must only be used on
 * server  side.
 */
if (process.browser === true) {
    throw new Error('The markdown service must be used only on server requests');
}

const markdownResource = (location, baseUri) => {
    if (!location) {
        throw new Error('The given location does not exist');
    }

    let parsedCached = null;
    const parsed = async () => {
        if (!parsedCached) {
            parsedCached = await resolveFiles();
        }

        return parsedCached;
    };

    let mapBySlug = null;
    const parsedMapBySlug = async () => {
        if (!mapBySlug) {
            const items = await parsed();

            mapBySlug = new Map();
            items.forEach(item => {
                mapBySlug.set(item.slug, item);
            });
        }

        return mapBySlug;
    };

    let mapById = null;
    const parsedMapById = async () => {
        if (!mapById) {
            const items = await parsed();

            mapById = new Map();
            items.forEach(item => {
                if (item.id) {
                    mapById.set(parseInt(item.id, 10), item);
                }
            });
        }

        return mapById;
    };

    const url = slug => `${baseUri}/${slug}/`;

    // Map an article for the views to be rendereed.
    const mapArticle = article => ({
        id: article.id,
        type: article.type,
        tweet: article.tweet,
        slug: article.slug,
        url: article.type === 'article' ? url(article.slug) : null,
        title: article.title,
        intro: article.intro,
        description: article.description,
        tags: article.meta.tags,
        date: moment.utc(article.meta.date).format('LL'),
        readingTimeText: article.meta.readingStats.text,
        readingTimeMinutes: article.meta.readingStats.minutes,
        words: article.meta.readingStats.words,
    });

    const paginate = (articles, page = 1, pageSize = null) => {
        if (page <= 0) {
            throw new Error('Page must start in 1');
        }

        if (pageSize !== null) {
            const startIndex = (page - 1) * pageSize;

            const pages = Math.ceil(articles.length / pageSize);

            if (page > page) {
                throw new Error('Page its greater than available');
            }

            return {
                page: parseInt(page),
                pages: parseInt(pages),
                pageSize: parseInt(pageSize),
                articles: articles.splice(startIndex, startIndex + pageSize),
            };
        }

        return articles;
    };

    return {
        /**
         * Get the url of an article based on its slug.
         * 
         * @returns String
         */
        url,
        /**
         * Returns all the parsed articles.
         * 
         * @returns Promise<Array>
         */
        parsed,
        /**
         * Returs a map by slug of all parsed articles.
         * 
         * @returns Promise<Map>
         */
        parsedMapBySlug,
        /**
         * Returs a map by id of all parsed articles.
         * 
         * @returns Promise<Map>
         */
        parsedMapById,
        /**
         * Returns the parsed articles sorted by date with pagination.
         * 
         * @returns Promise<Array>
         */
        async publishedByDate({ page = 1, pageSize = null } = {}) {
            const articles = (await parsed())
                .filter(article => article.meta.published)
                .sort((article1, article2) => moment.utc(article2.meta.date).diff(moment.utc(article1.meta.date)))
                .map(mapArticle);

            return paginate(articles, page, pageSize);
        },
        async latest() {
            return (await this.publishedByDate())[0] || null;
        },
        async filteredByTag(tag, { page = 1, pageSize = null } = {}) {
            const normalizedTag = tag.toLowerCase().trim().replace(' ', '-');

            const articles = (await this.publishedByDate())
                .filter(article => article.tags.includes(normalizedTag));

            return paginate(articles, page, pageSize);
        },
        async getBySlug(slug) {
            const map = await parsedMapBySlug();

            if (map.has(slug)) {
                const article = map.get(slug);

                return { ...mapArticle(article), ...article };
            }

            return null;
        },
        async getById(id) {
            const idAsInt = parseInt(id, 10);
            const map = await parsedMapById();

            if (map.has(idAsInt)) {
                const article = map.get(idAsInt);

                return { ...mapArticle(article), ...article };
            }

            return null;
        }
    }
};

export default {
    locations,
    articles: markdownResource(locations.articles, '/articles'),
};
