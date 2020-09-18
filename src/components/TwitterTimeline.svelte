<script>
  import TwitterWidgets from "./TwitterWidgets.svelte";

  export let href;
  export let text;
</script>

<TwitterWidgets />

<div class="box">
  <a class="twitter-timeline" data-theme="light" {href}>{text}</a>
</div>
