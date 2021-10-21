<script>
  import {
    title,
    ogTitle,
    ogDescription,
    ogImageUrl,
    ogImageHeight,
    ogImageWidth,
    ogUrl,
  } from "../stores/meta";
</script>

<svelte:head>
  <title>{$title}</title>
  <meta name="description" content="{$ogDescription}">

  <!-- Open graphs meta -->
  {#if $ogUrl}
    <meta property="og:url" content={$ogUrl} />
  {/if}

  <meta property="og:title" content={$ogTitle} />
  <meta property="og:description" content={$ogDescription} />
  <meta property="og:image" content={$ogImageUrl} />
  <meta property="og:image:width" content={$ogImageWidth} />
  <meta property="og:image:height" content={$ogImageHeight} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:author" content="Ángel Blanco" />

  <!-- Twitter meta -->
  <meta name="twitter:title" content={$ogTitle} />
  <meta name="twitter:description" content={$ogDescription} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@{import.meta.env.VITE_TWITTER_USER}" />
  <meta name="twitter:creator" content="@{import.meta.env.VITE_TWITTER_USER}" />
  <meta name="twitter:image" content={$ogImageUrl} />
</svelte:head>
