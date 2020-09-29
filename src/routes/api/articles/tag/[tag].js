import markdown from '../../../../services/markdown';

export async function get(req, res, next) {
	const { tag } = req.params;

	const articles = await markdown.articles.filteredByTag(tag, { page: req.query.page || 1, pageSize: 5 });

	if (articles.length === 0) {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({ message: "No articles for the given tag" }));

		return;
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	// Return only the necessary html content and the meta data.
	res.end(JSON.stringify(articles));
}
