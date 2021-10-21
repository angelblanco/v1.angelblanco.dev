<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const id = 'twitter-widgets';

    // Its already there.
    if (document.getElementById(id)) {
      return;
    }

    const scriptTag = document.createElement('script');

    scriptTag.id = id;
    scriptTag.type = 'text/javascript';
    scriptTag.async = true;
    scriptTag.charset = 'utf-8';
    scriptTag.src = 'https://platform.twitter.com/widgets.js';

    document.getElementsByTagName('head')[0].appendChild(scriptTag);
  });
</script>
