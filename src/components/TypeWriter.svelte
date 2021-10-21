<script>
  import isArray from "lodash/isArray.js";
  export let duration = 4500;
  export let erasingDuration = 1000;
  export let delay = 2000;
  export let text = [];

  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { tick } from "svelte";

  const stringLength = tweened(0, {
    duration,
    easing: cubicOut,
  });

  let needTextMove = false;
  let index = 0;

  $: textArray = isArray(text) ? text : [text];
  $: currentText = textArray[index] || "";
  $: maxSize = currentText.length;

  async function moveText() {
    await stringLength.set(maxSize, {
      duration,
      delay: 0,
      easing: cubicOut,
    });

    await stringLength.set(0, {
      duration: erasingDuration,
      delay,
      easing: cubicOut,
    });

    index += 1;
    if (index > textArray.length - 1) {
      index = 0;
    }

    await tick();
    needTextMove = true;
  }

  onMount(moveText);

  $: {
    if (needTextMove) {
      needTextMove = false;
      moveText();
    }
  }
</script>

{currentText.substring(0, $stringLength)}
