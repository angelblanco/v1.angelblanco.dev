<script context="module">
  export async function preload(page) {
    return { path: page.path };
  }
</script>

<script>
  import { sidebarMenu } from "./TagManager";
  export let path = "";

  $: isActiveUrl = url => path.includes(url);
</script>

<style lang="scss">
  $article-menu-transtion-lenght: 25px;

  .article-menu {
    a {
      background: $white;
    }

    li:not(:last-child) {
      margin-bottom: 4px;
    }

    a.is-active,
    a:hover {
      color: $white;

      .dot {
        background-color: $white;
      }
    }

    @each $tag, $color in $tags {
      a.#{$tag} {
        &.is-active,
        &:hover {
          // box-shadow: inset 0 -5rem $color;
          background-color: $color;
        }
      }
    }
  }
</style>

<aside class="menu article-menu">
  {#each sidebarMenu as menuEntry}
    <p class="menu-label">{menuEntry.title}</p>

    <ul class="menu-list">
      {#each menuEntry.items as menuLink}
        <li>
          <a
            rel="prefetch"
            class={menuLink.tag}
            class:is-active={isActiveUrl(menuLink.url)}
            href={menuLink.url}>
            <i class="dot {menuLink.tag}" />
            {menuLink.title}
          </a>

          {#if menuLink.items}
            <ul>
              {#each menuLink.items || [] as childLink}
                <li>
                  <a
                    rel="prefetch"
                    class={childLink.tag}
                    class:is-active={isActiveUrl(childLink.url)}
                    href={childLink.url}>
                    {childLink.title}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  {/each}
</aside>
