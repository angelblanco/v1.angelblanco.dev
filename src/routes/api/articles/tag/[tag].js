import markdown from '../../../../services/markdown';

export async function get({ params, query }) {
	const { tag } = params;

	const articles = await markdown.articles.filteredByTag(tag, { page: query.page || 1, pageSize: 5 });

	if (articles.length === 0) {
		return { status: 404, body: { message: "No articles for the given tag" } };
	}

	return {
		body: articles,
	};
}
