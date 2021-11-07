<script>
  export let toc = [];

  $: visible = toc.length > 0;
</script>

{#if visible}
  <div class="box toc">
    <div class="menu">
      <p class="menu-label has-text-info">On this article</p>
      <ul class="menu-list">
        {#each toc as tocItemLevel1}
          <li>
            <a href={tocItemLevel1.anchor}>
              {tocItemLevel1.title}
            </a>

            {#if tocItemLevel1.children.length > 0}
              <ul>
                {#each tocItemLevel1.children as tocItemLevel2}
                  <li>
                    <a href={tocItemLevel2.anchor}>
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
    @include touch {
      font-size: 1.25rem;

      .menu-label,
      a,
      p {
        font-size: 1.25rem;
      }
    }

    .menu-label {
      font-weight: $weight-bold;
      letter-spacing: 0.03em;
    }

    a:hover:not(.button) {
      color: $info;
      background-color: $info-light;
      border-radius: 1em;
    }
  }
</style>
