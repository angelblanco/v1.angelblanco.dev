<script context="module">
  export const prerender = false;
</script>

<script>
  import { getTag } from '../../components/TagManager';
  import { page } from '$app/stores';
  import * as patternsByTag from '../../assets/patterns';
  const allTags = ['vue', 'svelte', 'laravel', 'js', 'php', 'docker', 'node'];

  $: title = $page.url.searchParams.get('title') || 'angelblanco.dev';

  $: rawTags = ($page.url.searchParams.get('tags') || '')
    .split(',')
    .map((t) => t.trim())
    .filter((t) => t !== '');

  $: tags = (rawTags.length === 0 ? allTags : rawTags)
    .map(getTag)
    .filter((t) => !!t);

  $: selectedPattern =
    patternsByTag[
      $page.url.searchParams.has('pattern')
        ? $page.url.searchParams.get('pattern')
        : tags.map((t) => t.tag).find((t) => patternsByTag[t]) || 'fallback'
    ] || patternsByTag['fallback'];

  let titleClass = '';
  $: {
    const titleSize = title.length;
    if (titleSize <= 10) {
      titleClass = 'og__title--2xl';
    } else if (titleSize <= 30) {
      titleClass = 'og__title-xl';
    } else {
      titleClass = '';
    }
  }
</script>

<div class="og__outer-wrapper">
  <div class="og__box">
    <div class="og__image" style="background-image: url('{selectedPattern}')">
      <div class="og__title {titleClass}">
        {title}
      </div>

      <div class="og__tags">
        {#each tags as tag}
          <div class="tag og__tag is-light {tag.tag}">{tag.title}</div>
        {/each}
      </div>

      <div class="og__ref">
        <span class="og__ref-link"> https://v1.angelblanco.dev </span>
        a web development blog.
      </div>
    </div>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  .og__outer-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px;
    min-height: 100vh;
    background-color: #fdfdfd;
    font-family: 'Inter', sans-serif;
    color: #000;
  }

  .og__box {
    border: 1px dashed #ccc;
    padding: 5px;
  }

  /* The container to be captured as image */
  .og__image {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1200px;
    height: 630px;
    overflow: hidden;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 20%;
    padding-right: 20%;
  }

  .og__title {
    font-size: 75px;
    letter-spacing: -0.025em;
    font-weight: 800;
    line-height: 1;
    text-align: center;
    margin-bottom: 20px;
  }

  .og__title--2xl {
    font-size: 140px;
  }

  .og__title--xl {
    font-size: 110px;
  }

  .og__ref-link {
    font-weight: 600;
    color: #000;
    font-size: 20px;
  }

  .og__ref {
    font-size: 20px;
    font-weight: 400;
    color: #333;
    opacity: 0.6;
  }

  .og__tags {
    display: flex;
    gap: 10px;
    margin-bottom: 5px;
  }

  .og__tag {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.07em;
    background-color: var(--tag-color) !important;
    color: white !important;
    text-transform: uppercase;
    height: auto !important;
    padding: 0.35em !important;
    line-height: 1;
    margin: 0 !important;
  }
</style>
