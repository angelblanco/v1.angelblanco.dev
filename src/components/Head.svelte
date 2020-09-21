<script>
  export let ogUrl;

  import {
    title,
    ogTitle,
    ogDescription,
    ogImageUrl,
    ogImageHeight,
    ogImageWidth,
  } from "../stores/meta";
</script>

<svelte:head>
  <title>{$title}</title>

  <!-- Open graphs meta -->
  <meta property="og:url" content={ogUrl} />
  <meta property="og:title" content={$ogTitle} />
  <meta property="og:description" content={$ogDescription} />
  <meta property="og:image" content={$ogImageUrl} />
  <meta property="og:image:width" content={$ogImageWidth} />
  <meta property="og:image:height" content={$ogImageHeight} />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter meta -->
  <meta name="twitter:title" content={$ogTitle} />
  <meta name="twitter:description" content={$ogDescription} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@{process.env.TWITTER_USER}" />
  <meta name="twitter:creator" content="@{process.env.TWITTER_USER}" />
  <meta name="twitter:image" content="{$ogImageUrl}" />  
</svelte:head>
