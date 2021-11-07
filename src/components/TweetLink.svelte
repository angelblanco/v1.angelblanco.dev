<script>
  export let id;
  export let label = '';
  export let extraClass = '';
  export let account = import.meta.env.VITE_TWITTER_USER;

  $: url = `https://twitter.com/${account}/status/${id}`;
  $: linkClasses = `tweet-link ${extraClass}`;
</script>

<a href={url} target="__blank" class={linkClasses} aria-label={label}>
  <slot />
</a>
