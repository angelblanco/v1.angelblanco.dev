<script>
  import Terminal from "../Terminal.svelte";
  import TypeWriter from "../TypeWriter.svelte";
  import whoops from "./whoops.txt";
  import thatsA404 from "./thatsA404.txt";

  const text = [whoops, thatsA404];
</script>

<div class="whoops">
  <Terminal>
    <TypeWriter {text} />
  </Terminal>
</div>

<style lang="scss">
.whoops :global(.terminal .body) {
    min-height: 170px;
    text-align: center;

    @include mobile() {
        font-size: 0.5rem;
    }
}
</style>