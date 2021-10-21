<script>
  import Whoops from "../components/Whoops/Whoops.svelte";
  import { setTitle }from "../stores/meta.js";
  export let status;
  export let error;
  const dev = import.meta.env.NODE_ENV === "development";

  $: titlePreffix = dev ? status : "Error";

  $: {
    setTitle(`${titlePreffix} Error`);
  }
</script>

<div class="hero is-large">
  <div class="hero-body">
    <div class="container reading-width">
      <h1 class="title">Whoops I didn't expect that!</h1>

      <p class="subtitle">
        If you consider that this in an unexpected error I will appreciate if
        you reach me on <a href="https://twitter.com/{import.meta.env.TWITTER_USER}">Twitter.</a>
      </p>

      <Whoops />

      {#if dev}
        <div class="section reading-width">
          <div class="content">
            <h1>{status}</h1>
            <p>{error.message}</p>
            {#if error.stack}
              <pre>{error.stack}</pre>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
