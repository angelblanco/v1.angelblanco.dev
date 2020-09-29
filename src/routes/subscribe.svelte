<script>
  import TinyLetterSubscribeForm from "../components/TinyLetterSubscribeForm.svelte";
  import Head from "../components/Head.svelte";
  import { setOgUrl, setTitle } from "../stores/meta";

  setTitle("Newsletter");
  setOgUrl('/subscribe');
</script>

<Head />

<div class="section reading-width">
  <TinyLetterSubscribeForm>
    <p>
      Since the begining of this blog I'm sending a <strong>spam free</strong> newsletter.
      I mainly work with PHP, Docker, Javascript and SQL-NOSQL databases.
    </p>

    <p>
      By subscribing to newsletter you will get in your inbox my latest web
      development posts, at most once a week.
    </p>

    <p>
      <strong> Happy to see you here! 🙂 </strong> Ángel.
    </p>
  </TinyLetterSubscribeForm>
</div>
