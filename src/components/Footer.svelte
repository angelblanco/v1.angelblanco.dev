<script>
  import { interval } from "./utils";

  const libraries = [
    { tag: "framework", title: "sapper", link: "https://sapper.svelte.dev/" },
    { tag: "css", title: "bulma", link: "https://bulma.io/" },
    { tag: "js", title: "svelte", link: "https://svelte.dev/" },
    { tag: "bundler", title: "rollup", link: "https://rollupjs.org/" },
    {
      tag: "md",
      title: "markdown-it",
      link: "https://github.com/markdown-it/markdown-it",
    },
  ];

  const flavours = ["info", "warning", "danger", "primary"];
  let flavourIndex = 0;

  $: flavour = flavours[flavourIndex];

  // Update the footer every 5 seconds
  interval(() => {
    flavourIndex = flavours[flavourIndex + 1] ? flavourIndex + 1 : 0;
  }, 2000);
</script>

<style lang="scss">
  @mixin footerFlavour($class, $color) {
    .footer.#{$class} {
      // background-color: findLightColor($color);

      .footerRule {
        background-color: $color;
      }

      .fa-heart {
        color: $color;
      }
    }
  }

  @mixin footerTransition() {
    transition: all 1s;
  }

  .footer {
    z-index: 1;
    background-color: $white;

    @include footerTransition();

    p {
      margin-bottom: 0.7rem;
    }

    .footer-github {
      margin-bottom: 2rem;
    }

    .libraries-box {
      background-color:: white;
      position: relative;
      max-width: 400px;
      z-index: 3;

      &::after {
        content: "";
        position: absolute;
        top: calc(50% - 3px);
        height: 6px;
        left: -15%;
        right: -15%;
        background: $dark;
        z-index: -1;
        //margin: auto 0 auto -10%;
      }
    }

    .is-family-monospace {
      font-size: 14px;

      a:hover {
        text-decoration: underline;
      }
    }

    .footerRule {
      width: 80px;
      margin: 10px auto 30px auto;
      height: 10px;
      @include footerTransition();
    }

    .fa-heart {
      @include footerTransition();
    }
  }

  @include footerFlavour("danger", $danger);
  @include footerFlavour("info", $info);
  @include footerFlavour("primary", $primary);
  @include footerFlavour("warning", $warning);
</style>

<footer class="footer {flavour}">
  <hr class="footerRule is-hidden-print" />

  <div class="has-text-centered">
    <p class="has-text-grey-light is-family-monospace">
      Personal website of <a href="/about" class="has-text-grey-dark">Ángel
        Blanco</a>
    </p>

    <p class="footer-github is-hidden-print">
      <a href="https://github.com/angelblanco/angelblanco.dev" class="button is-small" target="__blank">
        <span class="icon"> <span class="fab fa-github" /> </span>

        <span>Developed by Ángel Blanco hosted on Github</span>
      </a>
    </p>

    <div class="libraries-box is-m-auto is-hidden-print">
      <div class="box">
        <p class="has-text-grey-light is-family-monospace">
          This project <i class="fas fa-heart" /> this libraries
        </p>

        <div
          class="field is-grouped is-grouped-multiline is-m-auto justify-center">
          {#each libraries as library}
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">{library.tag}</span>
                <a href={library.link} class="tag is-light">{library.title}</a>
              </div>
            </div>
          {/each}
        </div>

        <p class="has-text-grey-light is-family-monospace is-size-7">
          And all of <a class="has-decoration-underline has-text-grey-dark" href="/libraries" rel="preload">these...</a>
        </p>
      </div>
    </div>
  </div>
</footer>
