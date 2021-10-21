<script context="module">
  export function load({ page, fetch }) {
    const { params, path } = page;

    const pageNumber = params.pageNumber || 1;

    return fetch(`/api/articles/tag/${params.tag}/${pageNumber}`)
      .then((r) => r.json())
      .then(({ articles, pages, page }) => {
        return {
          props: {
            articles,
            pages,
            page,
            path,
            tagSlug: params.tag,
          },
        };
      });
  }
</script>

<script>
  import ArticleResumeList from "../../../components/ArticleResumeList.svelte";
  import Head from "../../../components/Head.svelte";
  import { getTag } from "../../../components/TagManager";
  import { setTitle, setOgDescription, setOgUrl } from "../../../stores/meta";
  export let articles;
  export let pages;
  export let page;
  export let path;
  export let tagSlug;

  function setMeta(slug) {
    const tag = getTag(slug);

    setOgUrl(path);
    setTitle(`${tag.title}${tag.topic ? " articles" : ""}`);

    const description = tag.topic
      ? `Find the latest ${tag.title} blog posts.`
      : `Search the latest "${tag.title}" of the blog`;

    setOgDescription(description);
  }

  setMeta(tagSlug);

  $: uriForPage = (page) =>
    page <= 1 ? `/tag/${tagSlug}/` : `/tag/${tagSlug}/${page}`;

  $: setMeta(tagSlug);
</script>

<Head />

<ArticleResumeList {articles} {page} {uriForPage} {pages} {path} />
