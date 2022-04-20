<script>
  import Error from './__error.svelte';
  import { onMount } from 'svelte';
  import trimEnd from 'lodash/trimEnd.js';
  import { goto } from '$app/navigation';

  $: visible = false;

  onMount(() => {
    const href = trimEnd(window.location.href, '/');

    if (href !== window.location.href) {
      goto(href);
    } else {
      visible = true;
    }
  });
</script>

{#if visible}
  <Error />
{/if}
