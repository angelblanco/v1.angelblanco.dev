<script>
  import TinyLetterSubscribeForm from './TinyLetterSubscribeForm.svelte';
  import { shareLinks } from '../stores/article';

  $: shareIcons =
    $shareLinks === null
      ? []
      : [
          {
            class: 'fa-twitter',
            url: $shareLinks.twitter.intent,
            label: 'Share on Twitter',
          },
          {
            class: 'fa-facebook',
            url: $shareLinks.facebook.intent,
            label: 'Share on Facebook',
          },
          {
            class: 'fa-linkedin-in',
            url: $shareLinks.linkedin.intent,
            label: 'Share on Linkedin',
          },
        ];
</script>

<div class="is-hidden-print">
  <hr />

  <div>
    <div class="has-text-centered">
      <div>
        <span class="has-text-weight-bold has-text-centered has-text-grey-dark">
          Share
        </span>
      </div>
      <div class="icons-container">
        {#each shareIcons as shareIcon}
          <a
            href={shareIcon.url}
            target="__blank"
            class="icon is-large"
            aria-label={shareIcon.label}
          >
            <i class="fab fa-2x {shareIcon.class}" />
          </a>
        {/each}
      </div>
    </div>
  </div>

  <!-- 
  <TinyLetterSubscribeForm />
   -->
</div>

<style lang="scss">
  .icons-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
</style>
