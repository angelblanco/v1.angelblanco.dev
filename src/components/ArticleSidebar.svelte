<script>
  import {
    documentScrollTop,
    copyToClipboard,
    shareArticleText,
  } from './utils';
  import { shareLinks } from '../stores/article';
  import { onMount } from 'svelte';
  export let article;
  export let startOffset = 500;

  let hidden = true;
  function handleOnScroll() {
    hidden = documentScrollTop() < startOffset;
  }

  onMount(() => {
    handleOnScroll();
  });

  $: shareEntries =
    $shareLinks === null
      ? []
      : Object.entries($shareLinks).map(([, value]) => value);

  let shareButtonText = 'Share to clipboard';

  let copied = false;
  let shareButtonClass = '';
  async function clickShareButton() {
    const setShareButtonTextTmp = async (buttonText, buttonClass) => {
      copied = true;
      shareButtonClass = buttonClass;
      const prevShareButtonText = shareButtonText;
      shareButtonText = buttonText;

      await new Promise((resolve) => setTimeout(resolve, 500));
      shareButtonClass = '';
      shareButtonText = prevShareButtonText;
      copied = false;
    };

    try {
      if (copied) {
        return;
      }

      copyToClipboard(shareArticleText(article));

      return setShareButtonTextTmp('Copied to clipboard!', 'copied is-success');
    } catch (err) {
      console.error(err);

      return setShareButtonTextTmp('Error', 'copied is-error').finally(
        () => (copied = false)
      ); // Just in case
    }
  }

  function clickCommentButton() {
    const comments = document.getElementById('comments');

    if (comments) {
      comments.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="article-sidebar-overlay" class:hidden>
  <div class="section reading-width">
    <div class="sidebar">
      <div class="social-icons has-text-align-left">
        {#each shareEntries as shareEntry}
          <div class="is-clearfix">
            <a
              href={shareEntry.intent}
              target="__blank"
              class="button is-small"
            >
              <span class="icon is-small">
                <i class="fab {shareEntry.icon}" />
              </span>
              <span>Share on {shareEntry.name}</span>
            </a>
          </div>
        {/each}

        <div class="is-clearfix">
          <button class="button is-small" on:click={clickCommentButton}>
            <span class="icon is-small"> <i class="fas fa-comments" /> </span>
            <span>Go Comments</span>
          </button>
        </div>

        <div class="is-clearfix">
          <button
            class="button is-small {shareButtonClass}"
            on:click={clickShareButton}
          >
            {#if !shareButtonClass}
              <span class="icon is-small">
                <i class="fas fa-share-alt" />
              </span>
            {/if}
            <span>{shareButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .article-sidebar-overlay {
    position: fixed;
    background: transparent;
    left: 0;
    top: 8rem;
    width: 100%;
    opacity: 1;
    display: none;
    pointer-events: none;
    transition: opacity 0.3s, visibility 0.3s;

    @include widescreen() {
      display: initial;
    }

    &.hidden {
      visibility: hidden;
      opacity: 0;
    }
    .sidebar {
      pointer-events: auto;
      margin-left: -275px;
      width: 200px;
      padding: 10px;
      z-index: 999;

      @include fullhd() {
        margin-left: -300px;
        padding: 0;
      }

      .icon {
        margin-right: 10px;

        > * {
          color: $grey-light;
        }
      }

      .button:hover .icon > * {
        color: $grey-darker;
      }
    }

    .section.reading-width {
      padding-top: 0;
    }

    .social-icons {
      padding: 0 1rem;

      .button {
        margin-bottom: 10px;
        width: 100%;
      }
    }
  }
</style>
