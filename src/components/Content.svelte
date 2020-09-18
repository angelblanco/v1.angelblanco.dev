<script>
  import { onMount } from "svelte";
  import { copyToClipboard, on } from "./utils";

  let contentContainer;
  export let html = "";
  export let extraClass = "";

  let copyCode = async ({ target }) => {
    try {
      if (target.classList.contains("copied")) {
        return;
      }

      const code = target.closest("pre.terminal").querySelector(".body pre")
        .textContent;

      copyToClipboard(code);
      const prevTextContent = target.textContent;
      target.classList.add("copied");
      target.textContent = "Copied";

      await new Promise(resolve => setTimeout(resolve, 500));
      target.textContent = prevTextContent;
      target.classList.remove("copied");
    } catch (err) {
      // Do nothing
    }
  };

  on(".blog.content button.copy", "click", copyCode, () => contentContainer);
</script>

<div class="content is-medium blog {extraClass}" bind:this={contentContainer}>
  <slot>
    {@html html}
  </slot>
</div>
