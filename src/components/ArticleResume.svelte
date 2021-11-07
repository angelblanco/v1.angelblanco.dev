<script>
  import Tags from './Tags.svelte';

  export let article;
  export let withTags = true;
  export let withReadMore = true;
</script>

<div class="article-resume">
  <!-- Title and subtitle -->
  <a rel="prefetch" class="link title is-3 is-block" href={article.url}>
    {article.title}
  </a>

  <!-- Link at the same leve -->
  <a
    rel="prefectch"
    href={article.url}
    class="date-subtitle link is-block has-text-grey-light is-size-7"
  >
    {article.date} · {article.readingTimeText}
  </a>

  <a
    href={article.url}
    class="content link is-intro has-text-grey-dark is-size-5"
  >
    {@html article.intro}
  </a>

  <div class="bottom-row is-clearfix">
    <!-- Tags -->
    {#if withTags}
      <Tags
        rootClass="is-pulled-left is-block is-hidden-mobile"
        tags={article.tags}
      />
    {/if}
    <!-- Read More button -->
    {#if withReadMore}
      <div class="read-more is-block">
        <a rel="prefetch" href={article.url} class="button is-info is-outlined">
          Read More
        </a>
      </div>
    {/if}
  </div>
</div>

<style lang="scss" global>
  .article-resume {
    .title {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 2.2rem;

      @include tablet() {
        font-size: 3rem;
      }
    }

    .date-subtitle {
      letter-spacing: 0.05em;
    }

    .bottom-row {
      padding: 1rem;
      display: flex;

      .tags {
        margin: 0 !important;
      }

      .tag {
        margin-bottom: 0;
      }
    }

    .read-more {
      margin-left: auto;
    }

    @include mobile() {
      .read-more {
        margin-left: 0;
        width: 100%;
      }

      .read-more .button {
        width: 100%;
        display: block;
      }
    }

    .is-intro {
      line-height: 1.85rem;
    }

    .terminal {
      max-width: 90%;
    }
  }
</style>
