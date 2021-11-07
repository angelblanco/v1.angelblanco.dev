<script>
  import '../components/FontAwesome';
  import Nav from '../components/Nav.svelte';
  import GoogleAnalytics from '../components/GoogleAnalytics.svelte';
  import Footer from '../components/Footer.svelte';
  import BackToTop from '../components/BackToTop.svelte';
  import { getStores } from '$app/stores';
  import { derived } from 'svelte/store';
  import trimStart from 'lodash/trimStart.js';

  const { page } = getStores();

  const segment = derived(page, ($page) => {
    const segments = trimStart($page.path || '', '/').split('/');

    return segments.length > 0 ? segments[0] : '';
  });
</script>

<GoogleAnalytics />
<Nav segment={$segment} />
<BackToTop />

<main class="blog">
  <slot />
</main>

<Footer />

<style lang="scss" global>
  @import '../app';
</style>
