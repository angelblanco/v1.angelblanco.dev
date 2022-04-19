<script>
  import Error from './__error.svelte';
  import { onMount } from 'svelte';
  import trimEnd from 'lodash/trimEnd.js';

  onMount(() => {
    const href = trimEnd(window.location.href, '/');

    if (href !== window.location.href) {
      window.location.href = href;
    }
  });
</script>

<Error />
