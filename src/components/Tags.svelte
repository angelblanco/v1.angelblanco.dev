<script>
  export let tags = [];
  export let rootClass = '';
  import { getTags } from "./TagManager";
  $: articleTags = getTags(tags);
</script>

<div class="{ `tags ${rootClass}` }">
  {#each articleTags as tag}
    <a rel="prefetch" href={tag.url} class="tag is-light {tag.tag}">{tag.title}</a>
  {/each}
</div>
