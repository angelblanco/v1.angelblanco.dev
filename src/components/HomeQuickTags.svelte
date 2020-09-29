<script>
  import { getTag } from "./TagManager";

  export const homeQuickTags = [
    // "vue",
    // "laravel",
    // "php",
    "js",
    "node",
    "docker"
  ].map(getTag);

  export let columnMobile = 12;
  export let columnTablet = 4;
  export let columnWideScreen = 2;
</script>

<style lang="scss">
  .home-quick-tags{
    font-size: 1.1rem;

    .icon {
      font-size: 1.5em;
    }
  }

  .grow-medium {
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
  
  .tagTitle {
    font-weight: $weight-light;
    color: $dark;
    letter-spacing: 0.05em;
  }
</style>

<div class="home-quick-tags columns is-multiline is-mobile">
  {#each homeQuickTags as quickTag}
    <div
      class="column is-{columnMobile}-mobile is-{columnTablet}-tablet is-{columnWideScreen}-widescreen">
      <div class="box grow-medium">
        <a href={quickTag.url}>
          <div class="media">
            <div class="media-left">
              <span class="icon is-large">
                <i class="{quickTag.icon}" />            
              </span>
            </div>


            <div class="media-content is-m-auto">
              <div class="is-clearfix">
                <span class="tagTitle">
                  {quickTag.title}
                </span>

                <span class="is-pulled-right">
                  <i
                    class="dot is-m-auto"
                    style="background-color: {quickTag.color};" />
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  {/each}
</div>
