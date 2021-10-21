import markdown from '../../../services/markdown';

export async function get({ params }) {
	const { slug } = params;

	const article = await markdown.articles.getBySlug(slug);

	if (article) {
		// Return only the necessary html content and the meta data.
		return { body: article };
	}

	return {
		status: 404,
		body: {
			html: `
				<h1 class="title">404 Not found</h1>
				<p>The page could not be found. </p>
			`
		}
	};
};
