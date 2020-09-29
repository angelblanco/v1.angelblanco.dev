import { staticImportMarkdown } from './_utils';

export async function get(req, res, next) {
    const about = {
        es: {
            aboutMe: (await staticImportMarkdown(() => import('../../../docs/about/es/about-me.md'))).html,
        },
        en: {
            aboutMe: (await staticImportMarkdown(() => import('../../../docs/about/en/about-me.md'))).html
        } 
    };

    return res.end(JSON.stringify(about));
};
