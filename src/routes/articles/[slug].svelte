<script context="module">
  export async function preload({ host, path, params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`/api/articles/${params.slug}`);
    const data = await res.json();

    if (res.status === 200) {
      return { article: data, path };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { onMount } from "svelte";
  import Content from "./../../components/Content.svelte";
  import { documentOffset } from "./../../components/utils";
  import MediaArticleHead from "./../../components/MediaArticleHead.svelte";
  import ArticleSidebar from "./../../components/ArticleSidebar.svelte";
  import ArticleFooter from "./../../components/ArticleFooter.svelte";
  import NProgress from "./../../components/NProgress.svelte";
  import TableOfContent from "./../../components/TableOfContent.svelte";
  import DisqusComments from "./../../components/DisqusComments.svelte";
  import { setArticle } from "./../../stores/article";
  import { setTitle, setOgDescription, setOgImageUrl } from "./../../stores/meta";
  export let article;
  export let path;

  let articleSectionContainer;
  let afterArticleContainer;
  let endOffset = null;
  let startOffset = null;

  onMount(() => {
    startOffset = documentOffset(articleSectionContainer).top;
    endOffset = documentOffset(afterArticleContainer).top;
  });

  $: {
    setArticle(article);
    setTitle(article.title);
    setOgDescription(article.description);

    if (article.shareImage) {
      setOgImageUrl(article.shareImage);
    }
  }
</script>

<style lang="scss">
  .afterArticleContainer {
    position: relative;
    top: -3.5rem; // - .section padding
    visibility: hidden;
    pointer-events: none;
  }

  a.shortLink {
    display: none;
  }
</style>

<svelte:head>
  <link rel="shortlink" href={article.shortLink} />
</svelte:head>

<section class="section reading-width pb-0">
  <MediaArticleHead {article} />
</section>

<NProgress {endOffset} {startOffset} />
<ArticleSidebar {article} />

<section class="section reading-width" bind:this={articleSectionContainer}>
  <h1 class="title is-1">{article.title}</h1>

  <Content html={article.intro} />

  <TableOfContent toc={article.toc.tree} {path} />

  <Content extraClass="articleBody" html={article.html} />

  <ArticleFooter {article} />
</section>

<section class="section reading-width is-hidden-print" id="comments">
  <h3 class="title is-3">Comments</h3>

  <DisqusComments />
</section>

<div bind:this={afterArticleContainer} class="afterArticleContainer" />

<a href={article.shortLink} class="shortLink">{article.title}</a>
