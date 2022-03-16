<script context="module">
  import { reverseShortner } from '../../services/shortner';

  export async function load({ params, fetch }) {
    try {
      let { id, preffix } = reverseShortner(params.shortLink);

      const res = await fetch(`/api/links/${preffix}/${id}`);

      if (res.status === 200) {
        const { url } = await res.json();

        return { redirect: url, status: 302 };
      }
    } catch (err) {
      console.log(err);
    }

    return {
      status: 404,
      error: new Error('Link not found'),
    };
  }
</script>

<script>
  import { setTitle } from '../../stores/meta';

  setTitle('Go to');
</script>
