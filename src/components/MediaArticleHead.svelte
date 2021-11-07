<script>
  import dayjs from '../bootstrap/dayjs.js';
  import Tags from './Tags.svelte';
  import TweetLink from './TweetLink.svelte';

  export let article;
  export let relativeTime = '';

  $: {
    const date = dayjs(article.meta.date);
    relativeTime =
      date.diff(dayjs(), 'days') < 7
        ? `${date.format('YYYY-MM-DD')}`
        : date.fromNow();
  }
</script>

<article class="media">
  <figure class="media-left">
    <a
      href="/about/"
      rel="prefecth"
      class="image is-64x64"
      aria-label="Abot the author"
    >
      <img
        class="is-rounded"
        src="/images/me-128x128.jpeg"
        alt="user"
        width="128"
        height="128"
      />
    </a>
  </figure>

  <div class="media-content">
    <div class="media-title-container">
      <span> Ángel Blanco </span>

      <span
        class="date-subtitle has-text-grey-light"
        aria-label="Written at {relativeTime}. Estimated {article.readingTimeText}"
      >
        {relativeTime} · {article.readingTimeText}
      </span>
    </div>

    <Tags tags={article.tags} />
  </div>

  <div class="media-right">
    {#if article.tweet}
      <TweetLink
        id={article.tweet}
        extraClass="icon is-large"
        label="Twitter feed"
      >
        <i class="fab fa-twitter fa-2x" />
      </TweetLink>
    {/if}
  </div>
</article>

<style lang="scss">
  .media-title-container {
    margin-bottom: 0.5rem;
    display: flex;
    gap: 1rem;
  }
</style>
