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
  import Head from "../../components/Head.svelte";
  import { getTag } from "../../components/TagManager";
  import { setTitle, setOgDescription, setOgUrl } from "../../stores/meta";
  export let articles;
  export let pages;
  export let page;
  export let path;
  export let tagSlug;
  
  function setMeta() {
    const tag =  getTag(tagSlug);

    setOgUrl(path);
    setTitle(`${tag.title}${tag.topic ? ' articles' : ''}`);
    
    const description = tag.topic 
      ? `Find the latest ${tag.title} blog posts.`
      : `Search the latest "${tag.title}" of the blog`; 

    setOgDescription(description);
  }

  setMeta();

  $: uriForPage = (page) => page <= 1 ? `/tag/${tagSlug}` : `/tag/${tagSlug}?page=${page}`;

  $: {
    setMeta();
  }
</script>

<Head />

<ArticleResumeList {articles} {page} {uriForPage} {pages} {path} />
