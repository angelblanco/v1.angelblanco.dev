<script>
  import {
    title,
    ogTitle,
    ogDescription,
    getOgUrl,
    ogImageUrl,
    ogImageHeight,
    ogImageWidth,
  } from "../stores/meta";

  const ogUrl = getOgUrl();
</script>

<svelte:head>
  <title>{$title}</title>

  <!-- Open graphs meta -->
  <meta property="og:title" content={$ogTitle} />
  <meta property="og:description" content={$ogDescription} />
  <meta property="og:url" content={$ogUrl} />
  <meta property="og:image" content={$ogImageUrl} />
  <meta property="og:image:width" content={$ogImageWidth} />
  <meta property="og:image:height" content={$ogImageHeight} />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter meta -->
  <meta property="twitter:title" content={$ogTitle} />
  <meta property="twitter:description" content={$ogDescription} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@{process.env.TWITTER_USER}" />
  <meta name="twitter:creator" content="@{process.env.TWITTER_USER}" />
  <meta name="twitter:image" content="{$ogImageUrl}" />  
</svelte:head>
