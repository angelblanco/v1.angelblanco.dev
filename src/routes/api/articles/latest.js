import markdown from '../../../services/markdown';

export async function get() {
  const article = await markdown.articles.latest();

  if (article) {
    return { body: article };
  }

  return { status: 404, body: { message: 'There is no latest article' } };
}
