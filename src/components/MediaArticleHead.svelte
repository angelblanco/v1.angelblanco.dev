<script>
  import moment from 'moment';
  import Tags from './Tags.svelte';
  import TweetLink from './TweetLink.svelte';

  export let article;
  export let relativeTime = '';

  $: {
    const date = moment(article.meta.date);
    relativeTime =
      date.diff(moment(), 'days') < 7
        ? `${date.format('YYYY-MM-DD')}`
        : date.fromNow();
  }
</script>

<article class="media">
  <figure class="media-left">
    <a href="/about/" rel="prefecth" class="image is-64x64">
      <img class="is-rounded" src="/images/me-128x128.jpeg" alt="user" />
    </a>
  </figure>

  <div class="media-content">
    <div class="container">
      <p>
        <a href="/about/" rel="prefetch">
          <strong>Ángel Blanco</strong>
        </a>

        <span class="date-subtitle has-text-grey-light is-size-7">
          {relativeTime} · {article.readingTimeText}
        </span>
      </p>

      <p>Tagged in:</p>
    </div>

    <Tags tags={article.tags} />
  </div>

  <div class="media-right">
    {#if article.tweet}
      <TweetLink id={article.tweet} extraClass="icon is-large">
        <i class="fab fa-twitter fa-lg" />
      </TweetLink>
    {/if}
  </div>
</article>

<style lang="scss">
  .date-subtitle {
    letter-spacing: 0.05em;
    margin-left: 5px;
  }
</style>
