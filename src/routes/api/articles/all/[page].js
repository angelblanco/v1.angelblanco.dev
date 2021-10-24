import markdown from '../../../../services/markdown';

export async function get({ params }) {
  const body = await markdown.articles.publishedByDate({
    page: params.page || 1,
    pageSize: 5,
  });

  return {
    body,
  };
}
