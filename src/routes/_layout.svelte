<script>
  import "../components/FontAwesome";
  import Nav from "../components/Nav.svelte";
  import GoogleAnalytics from "../components/GoogleAnalytics.svelte";
  import Footer from "../components/Footer.svelte";
  import BackToTop from "../components/BackToTop.svelte";
  import { title, ogTitle, ogDescription, getOgUrl, ogImageUrl } from "../stores/meta";
  export let segment = '';

  const ogUrl = getOgUrl();
</script>

<style lang="scss" global>
  @import "../app";
</style>

<GoogleAnalytics />
<Nav {segment} />
<BackToTop />

<svelte:head>
  <title>{$title}</title>

  <!-- Open graphs meta -->
  <meta property="og:title" content="{$ogTitle}" />
  <meta property="og:description" content="{$ogDescription}" />
  <meta property="og:url" content="{$ogUrl}">
  <meta property="og:image" content="{$ogImageUrl}">
  <meta property="og:locale" content="en_US">

  <!-- Twitter meta -->
  <meta property="twitter:title" content="{$ogTitle}" />
  <meta property="twitter:description" content="{$ogDescription}" />
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@{process.env.TWITTER_USER}">
  <meta name="twitter:creator" content="@{process.env.TWITTER_USER}">
</svelte:head>

<main class="blog">
  <slot />
</main>

<Footer />
