<script>
  export let title = 'bash';
</script>

<pre
  class="terminal">
  <div class="bar">
    <div class="btn" />
    <div
      class="bar-title">{title}</div>
  </div>

  <pre
    class="body"><slot /></pre>
</pre>
