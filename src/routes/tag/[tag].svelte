<script context="module">
  export function preload({ params, query, path }) {
    return this.fetch(`/api/articles/tag/${params.tag}?page=${query.page || 1}`)
      .then((r) => r.json())
      .then(({ articles, pages, page }) => {
        return {
          articles,
          pages,
          page,
          path,
          tagSlug: params.tag,
        };
      });
  }
</script>

<script>
  import ArticleResumeList from "../../components/ArticleResumeList.svelte";
  import { getTag } from "../../components/TagManager";
  import { setTitle, setOgDescription } from "../../stores/meta";
  export let articles;
  export let pages;
  export let page;
  export let path;
  export let tagSlug;
  $: uriForPage = (page) => page <= 1 ? `/tag/${tagSlug}` : `/tag/${tagSlug}?page=${page}`;

  $: {
    const tag = getTag(tagSlug);

    setTitle(`${tag.title}${tag.topic ? ' articles' : ''}`);
    
    const description = tag.topic 
      ? `Find the latest ${tag.title} blog posts.`
      : `Search the latest "${tag.title}" of the blog`; 

    setOgDescription(description);
  }
</script>

<ArticleResumeList {articles} {page} {uriForPage} {pages} {path} />
