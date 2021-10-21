<script>
  export let showOnPx = 150;
  let hidden = true;

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function goTop() {
    document.body.scrollIntoView();
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top is-hidden-print" on:click={goTop} class:hidden>
  <span class="icon is-large">
    <i class="fas fa-chevron-up fa-2x" />
  </span>
</div>

<style lang="scss">
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 20px;
    user-select: none;
    bottom: 20px;

    @include mobile() {
      display: none;
    }

    @include tablet-only {
      right: 10 px;

      .icon .fa-2x {
        font-size: 1.5rem;
      }
    }

    &.hidden {
      opacity: 0;
      visibility: hidden;
    }
  }
</style>
