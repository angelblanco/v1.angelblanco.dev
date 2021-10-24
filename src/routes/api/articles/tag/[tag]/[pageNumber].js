import markdown from '../../../../../services/markdown';

export async function get({ params }) {
  const { tag, pageNumber } = params;

  const articles = await markdown.articles.filteredByTag(tag, {
    page: pageNumber || 1,
    pageSize: 5,
  });

  if (articles.length === 0) {
    return { status: 404, body: { message: 'No articles for the given tag' } };
  }

  return {
    body: articles,
  };
}
