<script>
  export let toc = [];
  export let path = ''; // The current article path
  export const anchorHref = (anchor) => `${path}${anchor}`;

  $: visible = toc.length > 0;
</script>

{#if visible}
  <div class="box toc">
    <div class="menu">
      <p class="menu-label has-text-info">On this article</p>
      <ul class="menu-list">
        {#each toc as tocItemLevel1}
          <li>
            <a href={anchorHref(tocItemLevel1.anchor)}>
              <span class="anchor icon is-small has-text-info">
                <i class="fas fa-hashtag" />
              </span>
              {tocItemLevel1.title}
            </a>

            {#if tocItemLevel1.children.length > 0}
              <ul>
                {#each tocItemLevel1.children as tocItemLevel2}
                  <li>
                    <a href={anchorHref(tocItemLevel1.anchor)}>
                      <span class="anchor icon is-small has-text-info">
                        <i class="fas fa-hashtag" />
                      </span>
                      {tocItemLevel2.title}
                    </a>
                  </li>
                {/each}
              </ul>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}

<style lang="scss">
  .toc {
    a span.anchor {
      display: none;
      margin-left: -16px;
    }

    a:hover:not(.button) {
      font-weight: $weight-semibold;
      background-color: $white;

      span.anchor {
        display: initial;
      }
    }
  }
</style>
