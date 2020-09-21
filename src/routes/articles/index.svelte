<script context="module">
  export function preload({ params, query, path }) {
    return this.fetch(`/api/articles/all?page=${query.page || 1}`)
      .then(r => r.json())
      .then(({ articles, pages, page }) => {
        return { articles, pages, page, path };
      });
  }
</script>

<script>
  import ArticleResumeList from "../../components/ArticleResumeList.svelte";
  import Head from "../../components/Head.svelte";
  import { setTitle, setOgDescription, getOgUrl } from "../../stores/meta";
  export let articles;
  export let pages;
  export let page;
  export let path;
  export let uriForPage = page =>
    page <= 1 ? "/articles" : `/articles?page=${page}`;

  const ogUrl = getOgUrl();

  setTitle('Latest articles');
  setOgDescription('Javacript, Laravel, Vue, Docker posts and much more.')
</script>

<Head ogUrl={$ogUrl}/>

<ArticleResumeList {articles} {page} {uriForPage} {pages} {path} />
