<script context="module">
  import { reverseShortner } from "../../services/shortner";

  export async function preload({ params }) {
    try {
      let { id, preffix } = reverseShortner(params.shortLink);

      const res = await this.fetch(`/api/links/${preffix}/${id}`);

      if (res.status === 200) {
        const { url } = await res.json();

        return this.redirect(302, url);
      }
    } catch (err) {
      console.log(err);
    }

    this.error(404, "Link not found");
  }
</script>

<script>
  import { setTitle } from '../../stores/meta';

  setTitle('Go to');
</script>
