<script>
  export let segment;
  export let isHamburgerOpen = false;

  function closeHamburger() {
    isHamburgerOpen = false;
  }
</script>

<style lang="scss">
  $nav-transition-duration: 0.2s;

  @include desktop() {
    .navbar-item {
      background: $white;
      position: relative;
      padding: 0;
      transition-property: color, transform;
      transition-duration: $nav-transition-duration;
      letter-spacing: 0.2px;
      margin-left: 12px;

      &:not(:last-child) {
        margin-right: 12px;
      }

      &::after {
        transition-property: background, transform;
        transition-duration: $nav-transition-duration;
        content: "";
        transform-origin: center left;
        transform: scaleX(0);
        position: absolute;
        height: 5px;
        bottom: 7px;
        left: 0;
        right: 0;
        background: $white;
      }

      &.is-active,
      &:hover {
        background: white;
        // font-weight: $weight-semibold;
        letter-spacing: 0.2px;
      }

      &:not(.is-active):hover {
        color: $dark;
      }

      &.is-active.is-primary::after {
        transform: scaleX(1);
        background: $primary;
      }
    }
  }
</style>

<nav class="navbar container is-hidden-print" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <div class="image is-24x24" style="margin-right: 10px;">
        <img
          class="is-rounded"
          src="/images/me-128x128.jpeg"
          alt="{process.env.APP_BASE_TITLE}" />
      </div>
      <img alt="logo" src="/logo.png" width="160" height="24" />
    </a>

    <span
      on:click={() => (isHamburgerOpen = !isHamburgerOpen)}
      role="button"
      class="navbar-burger burger"
      class:is-active={isHamburgerOpen}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>

  </div>

  <div class="navbar-menu" class:is-active={isHamburgerOpen}>
    <div class="navbar-end">
      <a
        on:click={closeHamburger}
        rel="prefetch"
        class="navbar-item is-primary {segment === 'articles' || segment === 'tag' ? 'is-active' : ''}"
        href="articles">
        Articles
      </a>
      <a
        on:click={closeHamburger}
        rel="prefecth"
        class="navbar-item is-primary {segment === 'about' ? 'is-active' : ''}"
        href="about">
        About
      </a>

      <a
        on:click={closeHamburger}
        href="{process.env.GITHUB_URL}"
        target="__blank"
        class="navbar-item">
        <span class="icon is-hidden-touch">
          <i class="fab fa-github-alt fa-lg" />
        </span>

        <span class="is-hidden-desktop">Github</span>
      </a>
    </div>
  </div>
</nav>
