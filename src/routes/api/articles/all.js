import markdown from '../../../services/markdown';

export async function get({ query }) {
	const body = await markdown.articles.publishedByDate({ page: query.page || 1, pageSize: 5 });

	return {
		body,
	};
}
