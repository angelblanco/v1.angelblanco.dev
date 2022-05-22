<script context="module">
  import trimEnd from 'lodash/trimEnd.js';

  export async function load({ url, fetch, params }) {
    const allowedLangs = [
      { locale: 'en', title: 'English', link: '/about' },
      { locale: 'es', title: 'Spanish', link: '/about/es' },
    ];

    const res = await fetch(`/api/about`);
    const data = await res.json();

    const lang = trimEnd(params.lang || '', '/') || 'en';

    const isAllowedLang = allowedLangs.some(
      (allowedLang) => allowedLang.locale === lang
    );

    const translation = data[lang];

    if (res.status === 200 && isAllowedLang && translation) {
      return {
        props: { translation, lang, allowedLangs, path: url.pathname },
      };
    }

    return {
      status: 500,
      error: new Error(`Unable to find locale ${lang}`),
    };
  }
</script>

<script>
  export let lang;
  export let allowedLangs;
  export let translation;
  export let path;
  import { onMount } from 'svelte';
  import Content from '../../components/Content.svelte';
  import Head from '../../components/Head.svelte';
  import NProgress from '../../components/NProgress.svelte';
  import { documentOffset } from '../../components/utils';
  import {
    setTitle,
    setOgDescription,
    setOgUrl,
    setOgImageUrl,
  } from '../../stores/meta';

  let sectionContainer;
  let afterSectionContainer;
  let endOffset = null;
  let startOffset = null;
  onMount(() => {
    startOffset = documentOffset(sectionContainer).top;
    endOffset = documentOffset(afterSectionContainer).top;
  });

  setMeta();

  function setMeta() {
    setOgUrl(path);
    setOgImageUrl('/share/about-me-en.png');

    if (lang === 'es') {
      setTitle('Sobre mí!');
      setOgDescription(
        'Hola! Échale un vistazo a mi perfil de Ingeniero en Informática.'
      );
    } else {
      setTitle('About me!');
      setOgDescription('Hello! Checkout my software engineer profile.');
    }
  }

  $: {
    setMeta();
  }
</script>

<Head />

<NProgress {endOffset} {startOffset} />

<section bind:this={sectionContainer} class="section reading-width">
  <div class="profile-columns is-centered">
    <div>
      <figure class="image profile__image">
        <img
          class="is-rounded"
          src="/images/profile-600x600.jpeg"
          alt="It's me, Ángel!"
        />
      </figure>
    </div>
  </div>

  <div>
    <div class="buttons has-addons profile__buttons mt-2 mb-0 lang-button">
      {#each allowedLangs as allowedLang}
        <a
          rel="preload"
          href={allowedLang.link}
          class="button is-rounded"
          class:is-active={lang === allowedLang.locale}
          class:is-primary={lang === allowedLang.locale}>{allowedLang.title}</a
        >
      {/each}
    </div>

    <Content>
      {@html translation.aboutMe.html}
    </Content>

    <Content>
      {@html translation.experience.html}
    </Content>

    <Content>
      {@html translation.aboutFooter.html}
    </Content>
  </div>
</section>

<div bind:this={afterSectionContainer} class="afterArticleContainer" />

<style lang="scss">
  @media print {
    .lang-button {
      display: none;
    }
  }

  .profile-columns {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .afterArticleContainer {
    position: relative;
    top: -3.5rem; // - .section padding
    visibility: hidden;
    pointer-events: none;
  }

  .profile__buttons {
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem !important;
  }

  .profile__image {
    width: 250px;
    height: 250px;
  }

  @include tablet() {
    .profile__buttons {
      float: right;
      width: auto;
      justify-content: flex-start;
      margin-bottom: 0 !important;
    }

    .profile__image {
      width: 300px;
      height: 300px;
    }
  }
</style>
