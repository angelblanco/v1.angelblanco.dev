<script context="module">
  export function load({ url, fetch, params }) {
    if (
      !params.pageNumber ||
      `${parseInt(params.pageNumber)}` === params.pageNumber
    ) {
      const path = url.pathname;

      return fetch(`/api/articles/all/${params.pageNumber || 1}`)
        .then((r) => r.json())
        .then(({ articles, pages, page }) => {
          return { props: { articles, pages, page, path } };
        });
    }

    // Fallback to slug route
  }
</script>

<script>
  import ArticleResumeList from '../../components/ArticleResumeList.svelte';
  import Head from '../../components/Head.svelte';
  import { setTitle, setOgDescription, setOgUrl } from '../../stores/meta';
  export let articles;
  export let pages;
  export let page;
  export let path;
  export let uriForPage = (page) =>
    page <= 1 ? '/articles/' : `/articles/${page}`;

  setTitle('Latest articles');
  setOgDescription('Javacript, Laravel, Vue, Docker posts and much more.');
  setOgUrl('/articles/');
</script>

<Head />

<ArticleResumeList {articles} {page} {uriForPage} {pages} {path} />
