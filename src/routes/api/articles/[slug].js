import markdown from '../../../services/markdown';

export async function  get(req, res, next) {
    const { slug } = req.params;

    const article = await markdown.articles.getBySlug(slug);

    if (article !== null) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		// Return only the necessary html content and the meta data.
		res.end(JSON.stringify(article));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			html: `
				<h1 class="title">404 Not found</h1>
				<p>The page could not be found. </p>
			`
		}));
	}
};
