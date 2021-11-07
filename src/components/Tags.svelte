<script>
  export let tags = [];
  export let rootClass = '';
  import { getTags } from './TagManager';
  $: articleTags = getTags(tags);
</script>

<div class={`tags ${rootClass}`} aria-hidden="true">
  {#each articleTags as tag}
    <a
      rel="prefetch"
      href={tag.url}
      class="tag is-light is-medium {tag.tag}"
      aria-hidden="true">{tag.title}</a
    >
  {/each}
</div>
