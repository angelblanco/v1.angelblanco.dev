import { resourceForPreffix, pathForPreffix } from '../../../../services/shortner';
import markdown from '../../../../services/markdown';

export async function get(req, res, next) {
    const { preffix, id } = req.params;
    let url = null;

    try {
        switch (resourceForPreffix(preffix)) {
            case 'articles':
                const article = await markdown.articles.getById(id);

                url = `${pathForPreffix(preffix)}${article.slug}`;
                break;
        }
    } catch (err) {
        url = null;
    }

    if (!url) {
        res.statusCode = 404;
    }

    res.end(JSON.stringify({
        url,
    }));
}
