---
id: 6
title: Generate Open Graph images with Playwright and Svelte Kit
share_tweet: Generate open graph images with @playwrightweb and @sveltejs"
date: 2022-05-08
description: Sharing your URLs to social media it's important. Getting a beautiful image preview could make a difference. Learn how to generate them with a Sveltekit route and a Playwright node script.
intro: |
  Getting the best experience out of a web application includes the ability to share its links as good as possible. As you have noticed, Facebook or Twitter automatically display a preview image of the resource you are trying to share.

  All the social media platforms get these images' URLs from [The Open Graph Protocol](https://ogp.me/) image metadata tag. You can check [Vercel's](https://github.com/vercel/og-image) on-demand generator or [Github's](https://github.blog/2021-06-22-framework-building-open-graph-images/) newest approach to it.

  As a reference, I will use my webpage built with [Svelte kit](https://svelte.dev/) and [Playwright](https://playwright.dev/) to illustrate the process of creating images like the following one.

  ![preview](/images/share-default.png)
tags: ['svelte', 'node', 'js']
---

## The concept

> [The Open Graph Protocol](https://ogp.me/) enables any web page to become a rich object in a social graph. For instance, this is used on Facebook to allow any web page to have the same functionality as any other object on Facebook.

Dealing with title, type, url or locale properties is quite straightforward, as they could easily be injected in most common applications with ease. However generating dynamic images could look quite challenging. In reality, it could be easier than you think!

When you are decided to integrate the image metadata on a **static prerenderd site** you have different choices:

1. **Use the same image** for all of your links.
2. **Manually create and upload custom images per url** and fallback to a default one if missing. Take in mind that using third party images is always tricky. The external service may remove, update or transform the image. Also you have to be careful with the license of the image you are using.
3. **Create on-demand images** using a browser automation tool and add them to your build process.

Creating on-demand images with automation will take **2 steps**:

- Create a route that will render the image as HTML. We will pass the data to be rendered as **query parameters**.
- Once we are happy with the style of our route, we will **crawl the page and get a screenshoot** with a `Node JS` script. We will only include our target element.

## Create a route on sveltekit for previewing the image.

We will start from a blank layout. If your page is already using a layout you can create a blank layout on the root of the `routes` folder.

```svelte
<!-- routes/layout-blank.svelte -->
<slot />
```

Then you will create the actual index for your page. Either: `ogImage@blank.svelte` or `ogImage/index@blank.svelte`.

This component has all the styles in here, basically:

- We get the title from page url search parameter `title`. If not present we add one.
- We inspect the title length to determine the font-size of the title.
- Our target image will be `1200px` x `630px`. I choose that size based on various great post [like this one](https://iamturns.com/open-graph-image-size/). Note that the target container has a class `.og__image`.

> For creating svg patterns I've used [Haikei!](https://app.haikei.app/). Don't forget to set the canvas size!

```svelte
<!-- routes/ogImage/index@blank.svelte-->
<script context="module">
  // Disable prerender for this page as query parameters change the content of it at execution time
  export const prerender = false;
</script>

<script>
  import { page } from '$app/stores';
  import pattern from '../../assets/ogPattern.svg';

  // Override this variables with your own
  const refLink = 'https://angelblanco.dev';
  const phrase = 'a web development blog.';
  const defaultTitle = 'angelblanco.dev';

  $: title = $page.url.searchParams.get('title') || defaultTitle;

  let titleClass = '';
  $: {
    const titleSize = title.length;
    if (titleSize <= 10) {
      titleClass = 'og__title--2xl';
    } else if (titleSize <= 30) {
      titleClass = 'og__title--xl';
    } else {
      titleClass = '';
    }
  }
</script>

<div class="og__outer-wrapper">
  <div class="og__box">
    <div class="og__image" style="background-image: url('{pattern}')">
      <div class="og__title {titleClass}">
        {title}
      </div>

      <div class="og__ref">
        <span class="og__ref-link"> {refLink} </span>
        {phrase}
      </div>
    </div>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  .og__outer-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px;
    min-height: 100vh;
    background-color: #fdfdfd;
    font-family: 'Inter', sans-serif;
    color: #000;
  }

  .og__box {
    border: 1px dashed #ccc;
    padding: 5px;
  }

  /* The container to be captured as image */
  .og__image {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1200px;
    height: 630px;
    overflow: hidden;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 20%;
    padding-right: 20%;
  }

  .og__title {
    font-size: 75px;
    letter-spacing: -0.025em;
    font-weight: 800;
    line-height: 1;
    text-align: center;
    margin-bottom: 20px;
  }

  .og__title--2xl {
    font-size: 140px;
  }

  .og__title--xl {
    font-size: 110px;
  }

  .og__ref-link {
    font-weight: 600;
    color: #000;
    font-size: 20px;
  }

  .og__ref {
    font-size: 20px;
    font-weight: 400;
    color: #333;
    opacity: 0.6;
  }
</style>
```

## Create the playwright script.

First of all you need to install the libraries we are going to use. In this case [Playwright Library](https://playwright.dev/docs/library) and [wait-on](https://github.com/jeffbski/wait-on).

```bash
yarn add --dev playwright wait-on
```

> Note we are installing playwright library, which can be used to automate a browser from a Node JS script.

Now we need to create our node.js script. Assuming we create it on the root of our project. We will:

- Trigger a build of our `sveltekit` application and then preview it. With the "wait-on" library we ensure that the server is ready before the crawling.
- Open a chromiun instance with playwright and take a screenshot of our previously build url.
- After navigating to the target location, we locate the target element and save it to a file as png!

```js
import waitOn from 'wait-on';
import { exec } from 'child_process';
import { chromium } from 'playwright';

const options = {
  protocol: 'http',
  host: '127.0.0.1',
  port: 5001,
  timeout: 300000,
};

const url = `${options.protocol}://${options.host}:${options.port}/ogImage`;

let server;
const main = async () => {
  console.log('Building sveltekit...');

  server = exec(
    `yarn build && yarn preview --port ${options.port}`,
    (error) => {
      if (error) {
        console.error(error);
        console.error('Error building application!');
        process.exit(1);
      }
    }
  );

  const [, browser] = await Promise.all([
    waitOn({
      resources: [url],
      timeout: options.timeout,
    }),
    chromium.launch(),
  ]);

  console.log('Start generating og images...');
  const page = await browser.newPage();

  await page.goto(url);
  await page
    .locator('.og__image')
    .screenshot({ path: 'static/ogGenerate.png' });
  await browser.close();
};

// Run the sitemap.
main()
  .then(() => {
    console.log('Og images generated successfully');

    if (server) {
      server.kill(9);
    }

    process.exit(0);
  })
  .catch((err) => {
    console.error(err);

    if (server) {
      server.kill(9);
    }

    process.exit(1);
  });
```

Finally you can run it with node:

```bash
node createOpenGraphImage.js
```

## Going deeper

Once you have understand this process, you can esaily:

- Integrate this process on your CI system, for example after PR.
- Generate images for each of your links crawling them recurisvely with playwright and requesting them on demand.
- Add extra information to the image like tags.

::: github-link https://github.com/angelblanco/angelblanco.dev You can check the source code of this page on Github
