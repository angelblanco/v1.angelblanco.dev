<script>
  export let segment;
  export let isHamburgerOpen = false;
  import LegacyNote from './LegacyNote.svelte';
  function closeHamburger() {
    isHamburgerOpen = false;
  }
</script>

<nav class="navbar container is-hidden-print" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img alt="logo" src="/logo.png" width="160" height="24" />
    </a>

    <span
      on:click={() => (isHamburgerOpen = !isHamburgerOpen)}
      role="button"
      class="navbar-burger burger"
      class:is-active={isHamburgerOpen}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
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
        class="navbar-item is-primary {segment === 'articles' ||
        segment === 'tag'
          ? 'is-active'
          : ''}"
        href="/articles"
      >
        <span class="icon is-hidden-desktop">
          <i class="fas fa-book fa-lg" />
        </span>
        <span>Articles</span>
      </a>
      <a
        on:click={closeHamburger}
        rel="prefecth"
        class="navbar-item is-primary {segment === 'about' ? 'is-active' : ''}"
        href="/about"
      >
        <span class="icon is-hidden-desktop">
          <i class="fas fa-user fa-lg" />
        </span>
        <span>About</span>
      </a>

      <a
        on:click={closeHamburger}
        href="https://github.com/angelblanco"
        target="__blank"
        class="navbar-item"
        aria-label="My Github page"
      >
        <span class="icon">
          <i class="fab fa-github-alt fa-lg" />
        </span>

        <span class="is-hidden-desktop">Github</span>
      </a>
    </div>
  </div>
</nav>
<LegacyNote />

<style lang="scss">
  $nav-transition-duration: 0.2s;

  @include touch() {
    .navbar-menu .navbar-item {
      padding: 1rem;
      font-size: 1.3rem;
      border-radius: 8px;
      margin: 0 0.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      &:hover,
      &:focus {
        background-color: $info-light;
        color: $info;
      }
    }
  }

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
        content: '';
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
