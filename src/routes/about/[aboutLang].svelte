<script context="module">
  const allowedLangs = [
    { locale: "en", title: "English" },
    { locale: "es", title: "Spanish" },
  ];

  export async function preload({ params, query }) {
    const res = await this.fetch(`/api/about`);
    const data = await res.json();

    const isAllowedLang = allowedLangs.some(
      (lang) => lang.locale === params.aboutLang
    );

    const translation = data[params.aboutLang];

    if (res.status === 200 && isAllowedLang && translation) {
      return { translation, lang: params.aboutLang, allowedLangs };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let lang;
  export let allowedLangs;
  export let translation;
  import Content from "../../components/Content.svelte";
  import Head from "../../components/Head.svelte";
  import { setTitle, setOgDescription } from "../../stores/meta";

  setMeta();

  function setMeta() {
    if (lang === "es") {
      setTitle("Sobre mí!");
      setOgDescription(
        "Hola! Échale un vistazo a mi perfil de Ingeniero en Informática."
      );
    } else {
      setTitle("About me!");
      setOgDescription("Hello! Checkout my software engineer profile.");
    }
  }

  $: {
    setMeta();
  }
</script>

<Head />

<section class="section reading-width">
  <div class="columns is-centered">
    <div class="column is-narrow">
      <figure class="image is-128x128">
        <img
          class="is-rounded"
          src="/images/me-650x650.jpeg"
          alt="It's me, Ángel!" />
      </figure>
    </div>
  </div>

  <div>
    <div class="buttons has-addons is-pulled-right mt-2">
      {#each allowedLangs as allowedLang}
        <a
          rel="preload"
          href={`/about/${allowedLang.locale}`}
          class="button is-rounded is-small"
          class:is-active={lang === allowedLang.locale}
          class:is-primary={lang === allowedLang.locale}>{allowedLang.title}</a>
      {/each}
    </div>

    <Content>
      {@html translation.aboutMe}
    </Content>
  </div>
</section>
