<script>
  import { isValidEmail } from "./utils";
  export let user = process.env.TINY_LETTER_USER;
  export let popupWindow = "popupwindow";
  let form;
  let email = "";
  let isEmailInDanger = false;

  $: url = `https://tinyletter.com/${user}`;

  function subscribe() {
    isEmailInDanger = !isValidEmail(email);

    if (isEmailInDanger) {
      return;
    }

    window.open(
      `https://tinyletter.com/${user}`,
      popupWindow,
      "scrollbars=yes,width=800,height=600"
    );

    form.submit();

    return true;
  }

  function setEmail({ target }) {
    email = target.value;
    isEmailInDanger = false;
  }
</script>

<style lang="scss">
  .tiny-letter .column {
    @include tablet() {
      max-width: 550px;
    }
  }
</style>

<div class="columns is-centered mt-3 tiny-letter">
  <div class="column">
    <div class="box tiny-letter pb-5">
      <div class="content">
        <h4>Subscribe to the newsletter 🚀</h4>

        <slot>
          <p>
            Keep up to date with the latest web development posts, at most once a
            week.
          </p>
        </slot>
      </div>

      <form
        class="fields"
        bind:this={form}
        action={url}
        target={popupWindow}
        method="post">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input
              class="input"
              class:is-danger={isEmailInDanger}
              type="email"
              placeholder="Your email address"
              on:input={setEmail}
              value={email}
              id="tlemail"
              name="email" />
          </div>

          <div class="control">
            <button class="button is-info" on:click={subscribe}>
              Subscribe
            </button>
          </div>
        </div>

        {#if isEmailInDanger}
          <p class="help is-danger">This email looks invalid</p>
        {/if}

        <input type="hidden" value="1" name="embed" />
      </form>

      <div class="is-size-7 is-clearfix">
        <a
          href="https://tinyletter.com"
          class="has-text-grey-light is-pulled-right"
          target="_blank">
          powered by TinyLetter
        </a>
      </div>
    </div>
  </div>
</div>
