import markdown from '../../../services/markdown';

export async function  get(req, res, next) {
    const article = await markdown.articles.latest();

	if (article) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({ article }));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({ message: 'There is no latest article'}));
	}
};
