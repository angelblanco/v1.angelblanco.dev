<script>
  import "../components/FontAwesome";
  import Nav from "../components/Nav.svelte";
  import GoogleAnalytics from "../components/GoogleAnalytics.svelte";
  import Footer from "../components/Footer.svelte";
  import BackToTop from "../components/BackToTop.svelte";
  export let segment = '';
</script>

<style lang="scss" global>
  @import "../app";
</style>

<GoogleAnalytics />
<Nav {segment} />
<BackToTop />

<main class="blog">
  <slot />
</main>

<Footer />
