<script context="module">
  export async function preload({ params, query, page }) {
    // Fetch articles of page 1
    return this.fetch("/api/articles/all?page=1")
      .then((r) => r.json())
      .then(({ articles, pages, page }) => ({
        latestArticle: articles.splice(0, 1)[0] || null,
        articles,
        pages,
        page,
      }));
  }
</script>

<script>
  import HomeQuickTags from "../components/HomeQuickTags.svelte";
  import Head from "../components/Head.svelte";
  import ArticleResume from "../components/ArticleResume.svelte";
  import { setOgUrl } from "../stores/meta";
  export let articles;
  export let pages;
  export let page;
  export let latestArticle;

  setOgUrl("/");

  $: hasNextPage = page < pages && pages >= 1;
</script>

<style lang="scss">
  .box hr:last-child {
    display: none;
  }

  .button.all-articles {
    margin-bottom: 1.5rem;
  }

  .button.next-page .icon {
    margin-left: 0.5rem;
  }
</style>

<Head />

<section class="section">
  <div class="container reading-width">
    <div class="notification is-primary is-light">
      <div class="columns">
        <div class="column">
          Welcome to <strong>Angel Blanco's</strong> blog! 🚀
        </div>
        <div class="column is-hidden-print">
          <div class="is-clearfix">
            <a
              href="/articles"
              class="is-pulled-right-tablet button is-danger is-small">
              See the latest articles
            </a>
          </div>
        </div>
      </div>
    </div>

    <HomeQuickTags columnWideScreen="4" columnTablet="6" />

    <div class="box">
      <p class="title is-6 has-text-primary">Latest Article</p>

      <ArticleResume article={latestArticle} />
    </div>

    <a
      href="/articles"
      class="button all-articles w-100 is-5 is-large is-outlined is-primary
        is-hidden-print">
      See all the articles
    </a>

    <div class="box other-articles">
      {#each articles as article}
        <ArticleResume {article} />
        <hr />
      {/each}
    </div>

    {#if hasNextPage}
      <div class="container">
        <a
          href="/articles?page=2"
          class="button next-page is-5 is-small is-outlined is-pulled-right">
          Next page <span class="icon is-pulled-right"> <i
              class="fas fa-angle-double-right" /> </span>
        </a>
      </div>
    {/if}
  </div>
</section>
