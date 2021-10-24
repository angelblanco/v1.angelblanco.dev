<script>
  import { onMount } from 'svelte';
  import { documentScrollTop } from './utils';

  // Props
  export let startOffset = null; // The progres start on this pixel
  export let endOffset = null; // The progress ends on this pixel
  export let easing = 'linear';
  export let speed = 300;

  // Internal variables
  let progress = 0;
  let lastScrollTop = 0;

  function getScrollTop() {
    return documentScrollTop() - startOffset;
  }

  function getScrollProgress() {
    const scrollHeight =
      endOffset ||
      document.documentElement.scrollHeight ||
      document.body.scrollHeight;

    const maxScrollTop =
      scrollHeight - document.documentElement.clientHeight - startOffset;

    return Math.min(1, Math.max(0, getScrollTop() / maxScrollTop));
  }

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }

  function setProgressByScroll() {
    lastScrollTop = getScrollTop();

    progress = getScrollProgress();
  }

  onMount(setProgressByScroll);

  $: barStyle = [
    `margin-left: ${toBarPerc(progress)}%`,
    `transition: all ${speed}ms ${easing}`,
  ].join(';');

  $: nProgressStyle = `transition: opacity ${speed}ms ${easing}`;
  $: hidden = lastScrollTop <= 0;
  $: complete = progress === 1;
</script>

<svelte:window
  on:scroll={setProgressByScroll}
  on:resize={setProgressByScroll}
  on:touchmove={setProgressByScroll}
/>

<div class="nprogress" class:hidden style={nProgressStyle}>
  <div class="bar" style={barStyle} class:complete />
</div>

<style lang="scss">
  .nprogress {
    pointer-events: none;
    opacity: 1;

    &.hidden {
      opacity: 0;
    }

    .bar {
      background: $info;
      z-index: 1000;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      position: fixed;

      &.complete {
        background: $success;
      }
    }
  }
</style>
