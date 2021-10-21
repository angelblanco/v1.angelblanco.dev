import { staticImportMarkdown } from './_utils';

export async function get(req, res, next) {
    const body = {
        es: {
            aboutMe: (await staticImportMarkdown(() => import('../../../docs/about/es/about-me.md'))).html,
        },
        en: {
            aboutMe: (await staticImportMarkdown(() => import('../../../docs/about/en/about-me.md'))).html
        } 
    };

    return { body };
};
