import markdown from '../../../services/markdown';

export async function get(req, res, next) {
	const articles = await markdown.articles.publishedByDate({ page: req.query.page || 1, pageSize: 5 });

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	// Return only the necessary html content and the meta data.
	res.end(JSON.stringify(articles));
}
