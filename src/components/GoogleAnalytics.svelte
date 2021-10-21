<script>
  import { getStores } from "$app/stores";
  import { onMount } from "svelte";

  export let trackingId = "UA-92522790-2"; // 'angeblanc.dev'
  export let scriptId = "google-analytics-script";
  export let domain = "https://www.googletagmanager.com";

  let mounted = false;
  const { page } = getStores();

  async function addGoogleAnalyticsScript(dataLayerName = "dataLayer") {
    return new Promise((resolve, reject) => {
      const head = document.head || document.getElementsByTagName("head")[0];

      const link = document.createElement("link");
      link.href = domain;
      link.rel = "preconnect";
      head.appendChild(link);

      const script = document.createElement("script");
      script.async = true;
      script.src = `${domain}/gtag/js?id=${trackingId}&l=${dataLayerName}`;
      script.charset = "utf-8";
      script.setAttribute("id", scriptId);

      head.appendChild(script);

      script.onload = resolve;
      script.onerror = reject;
    });
  }

  onMount(async () => {
    if (window.document.getElementById(scriptId)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", trackingId);

    try {
      await addGoogleAnalyticsScript();
    } catch (err) {
      console.error("gtag failure");

      const s = window.document.getElementById(scriptId);

      if (s) {
        s.remove();
      }

      return;
    }

    mounted = true;
  });

  // Single page application handling
  $: {
    const page_path = $page.path;

    if (mounted && window.gtag) {
      gtag("config", trackingId, { page_path });
    }
  }
</script>
