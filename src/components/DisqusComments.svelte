<script>
  export let article;
  export let user = process.env.DISQUS_USER;  
  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  import { getCanonicalUrlForPath } from '../stores/canonical';

  let scriptNode = null;
  const { page } = stores();

  $: src = `https://${user}.disqus.com/embed.js`;
  $: pageUrl =  getCanonicalUrlForPath(article);

  onMount(() => {
    scriptNode = document.createElement("script");
    scriptNode.src = src;
    scriptNode.setAttribute("data-timestamp", `${new Date()}`);
    document.body.appendChild(scriptNode);

    window.disquss_config = function () {
      this.page.url = pageUrl;
      this.page.identifier = `a:${article.id}`;
    };
  });

  onDestroy(() => {
    if (scriptNode && window && window.document) {
      window.document.body.removeChild(scriptNode);
      window.disquss_config = null;
    }
  });
</script>

<div id="disqus_thread"/>
