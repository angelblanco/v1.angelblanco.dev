<script context="module">
  export async function preload({ path }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`/api/packages`);
    const { dependencies, devDependencies } = await res.json();

    if (res.status === 200) {
      return {
        dependencies: [
          { title: "Dependencies", deps: dependencies },
          { title: "Dev dependencies", deps: devDependencies },
        ],
        path,
      };
    } else {
      this.error(res.status);
    }
  }
</script>

<script>
  export let dependencies;
  export let path;

  import Content from "../components/Content.svelte";
  import Head from "../components/Head.svelte";
  import { setTitle, setOgUrl } from "../stores/meta";

  setOgUrl(path);
  setTitle("Libraries used in this blog");
</script>

<style lang="scss">
  .dependency-grid .column {
    text-decoration: underline;
    color: $dark;
    font-size: 13px;

    &:hover {
      background-color: $info;
      color: $white;
    }
  }
</style>

<Head />

<section class="section reading-width">
  <Content>
    {#each dependencies as dependencie}
      <h3 class="title">{dependencie.title}</h3>

      <div class="box">
        <div class="dependency-grid columns is-multiline is-family-monospace">
          {#each dependencie.deps as dep}
            <a
              href="https://www.npmjs.com/package/{dep}"
              class="column is-6-tablet is-4-desktop">
              <span>{dep}</span>
            </a>
          {/each}
        </div>
      </div>
    {/each}
  </Content>
</section>
