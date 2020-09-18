<script>
  import { stores } from "@sapper/app";
  import { onMount } from "svelte";

  export let measurementId = "UA-92522790-2"; // 'angeblanc.dev'
  export let scriptId = "google-analytics-script";
  export let domain = "https://www.googletagmanager.com";

  let mounted = false;
  const { page } = stores();

  async function addGoogleAnalyticsScript(dataLayerName = "dataLayer") {
    return new Promise((resolve, reject) => {
      const head = document.head || document.getElementsByTagName("head")[0];

      const link = document.createElement("link");
      link.href = domain;
      link.rel = "preconnect";
      head.appendChild(link);

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}&l=${dataLayerName}`;
      script.charset = "utf-8";

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
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", measurementId);

    await addGoogleAnalyticsScript();
    mounted = true;
  });

  // Single page application handling
  $: {
    const page_path = $page.path;

    if (mounted && window.gtag) {
      gtag("config", measurementId, { page_path });
    }
  }
</script>
