<script>
  import TinyLetterSubscribeForm from './TinyLetterSubscribeForm.svelte';
  import { shareLinks } from '../stores/article';

  $: shareIcons =
    $shareLinks === null
      ? []
      : [
          { class: 'fa-twitter', url: $shareLinks.twitter.intent },
          { class: 'fa-facebook', url: $shareLinks.facebook.intent },
          { class: 'fa-linkedin-in', url: $shareLinks.linkedin.intent },
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
      <div>
        {#each shareIcons as shareIcon}
          <a href={shareIcon.url} target="__blank" class="icon is-medium">
            <i class="fab fa-lg {shareIcon.class}" />
          </a>
        {/each}
      </div>
    </div>
  </div>

  <TinyLetterSubscribeForm />
</div>
