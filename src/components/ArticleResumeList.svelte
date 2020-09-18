<script>
  import ArticleResume from "./ArticleResume.svelte";
  import ArticleMenu from "./ArticleMenu.svelte";
  import { tags } from "./TagManager";

  export let articles;
  export let pages;
  export let uriForPage;
  export let page;
  export let path = "";

  $: hasPrevPage = page > 1 && pages >= 1;
  $: hasNextPage = page < pages && pages >= 1;
</script>

<section class="section article-resume-list">
  <div class="columns">
    <div class="column is-3 is-hidden-mobile">
      <ArticleMenu {path} />
    </div>

    <div class="column">
      <div class="reading-width">
        {#each articles as article}
          <ArticleResume {article} />
          <hr />
        {/each}

        <nav
          class="pagination is-centered is-small"
          role="navigation"
          aria-label="pagination">
          <a
            href={uriForPage(page - 1)}
            class="pagination-previous"
            class:is-hidden={!hasPrevPage}>
            <span class="icon">
              <i class="fas fa-angle-double-left" />
            </span>
            Previous page
          </a>

          <a
            href={uriForPage(page + 1)}
            class="pagination-next"
            class:is-hidden={!hasNextPage}>
            Next page
            <span class="icon">
              <i class="fas fa-angle-double-right" />
            </span>
          </a>

          <ul class="pagination-list" />
        </nav>
      </div>
    </div>
  </div>

  <div class="is-hidden-tablet">
    <ArticleMenu {path} />
  </div>
</section>
