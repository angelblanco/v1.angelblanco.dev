---
id: 5
title: "Add Google Analytics' gtag to a Sapper project"
share_tweet: "Add Google Analytics' gtag to sapper with @sveltejs"
tweet: ''
date: '2020-10-28'
description: 'Step by step guide to create a component that tracks your sapper application every time the user changes its URL with virtual page views.'
intro: |
  Adding Google Analytics support to a single page application that changes the URL on the client-side could be tricky. It's not as simple as adding tracking to a server-side rendered application that refreshes its scripts on every page hit.

  To get the real flow of a user across your Sapper website, you need to track all the URL changes that happen when the user follows a Svelte link. Let's simplify the tracking of the pageview event on Sapper with a component without using any third party library!
tags: ['svelte', 'js']
---

## In-depth tutorial

In this first part of the tutorial, I will try to explain how to approach the inclusion of any third party script with a custom component. Note that sometimes including it on your `template.html` will have you covered.

> If you have a tracking id and want to skip this reading, please go directly to
> [Google Analytics Svelte component](#google-analytics-svelte-component).

### Before start steps

First of all, you need to register your domain on [Google Analytics](https://analytics.google.com/). Following all the desired steps, you will have access to a tracking id. The number we should have will look like `UA-000000-2`. Don't worry, if you lose it you will have access to it on the Admin section of your property.

### Insert the google script on the page with vanilla JS

We cannot inject a script with `src` on our Svelte component template. Even if we could do so, it will not be as great as having all the control in your component. So what we are going to create a script element with Javascript, assigning it a unique identifier and mount it to the end of the document body.

As sapper ships with ES6 support out of the box and promises are supported, we will create one that resolves or rejects based on the script execution. This way, we can perform actions on error like removing the script on connection issues or when an adblocker is disabling `gtag`.

```javascript
export let domain = 'https://www.googletagmanager.com';
export let scriptId = 'google-analytics-script';
export let trackingId = 'UA-000000-2';

async function addGoogleAnalyticsScript(dataLayerName = 'dataLayer') {
  return new Promise((resolve, reject) => {
    const head = document.head || document.getElementsByTagName('head')[0];

    const link = document.createElement('link');
    link.href = domain;
    link.rel = 'preconnect';
    head.appendChild(link);

    const script = document.createElement('script');
    script.async = true;
    script.src = `${domain}/gtag/js?id=${trackingId}&l=${dataLayerName}`;
    script.charset = 'utf-8';
    script.setAttribute('id', scriptId);

    head.appendChild(script);

    script.onload = resolve;
    script.onerror = reject;
  });
}
```

### Track the first hit of your web page

Google Analytics tracking will happen on the client-side. That means that we must prepare our component tracking to happen only when mounted.
Due to it, we will use a flag `mounted` that will tell if Google Analytics script has mounted successfully in a previous URL.

On failure, we will remove the script just in case you want to create some retrying mechanism. Note that by default, Sapper applications ship with a [Service Worker](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API) that will have you covered in some cases when the client loses its internet connection. In this case, we are logging the error and removing the script.

```javascript
import { onMount } from 'svelte';
export let scriptId = 'google-analytics-script';
export let trackingId = 'UA-000000-2';

let mounted = false;

onMount(async () => {
  if (window.document.getElementById(scriptId)) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  gtag('js', new Date());
  gtag('config', trackingId);

  try {
    await addGoogleAnalyticsScript();
  } catch (err) {
    console.error('gtag failure');

    const s = window.document.getElementById(scriptId);

    if (s) {
      s.remove();
    }

    return;
  }

  mounted = true;
});
```

### Detecting page changes on your Sapper single page application

The library used to track on Google Analytics is called google tag manager (gtag). During the registration process on GA, you have seen a script that you could inject on your `template.html` of your sapper application. However, if you do that
you won't register pageview events when the user follows a sapper link.

> Sapper navigation is using the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) of your browser. When the user follows a link, the framework picks the assets and preload the missing data. After that, it can render the view without redownloading the full page. That's one of the main benefits of using a Javascript framework with
> routing capabilities.

Sapper is prepared to handle this tracking giving us a [module](https://sapper.svelte.dev/docs#Stores) that expose the `page`
[store](https://svelte.dev/docs#svelte_store). With this simple snippet, you will log the page path on every URL change.

```javascript
import { stores } from '@sapper/app';
const { page } = stores();

$: {
  const page_path = $page.path;

  console.log({ page_path });
}
```

If we want to send the page view during navigation changes,
we can do so really easily just by calling our `gtag` function, that it's globally available on the window object.

```javascript
import { stores } from '@sapper/app';
const { page } = stores();
let mounted = false;

// Single page application handling
$: {
  const page_path = $page.path;

  if (mounted && window.gtag) {
    gtag('config', trackingId, { page_path });
  }
}
```

## Google Analytics svelte component

Combining all the previous parts of the post, we will have a complete svelte component ready to be used on your root `_layout.svelte`.

```html
<script>
  import { stores } from '@sapper/app';
  import { onMount } from 'svelte';

  // Pass or harcode your google analytics tracking id
  export let trackingId = 'UA-000000-2';
  export let scriptId = 'google-analytics-script';
  export let domain = 'https://www.googletagmanager.com';

  let mounted = false;
  const { page } = stores();

  // Adding google tag manager will fail for example if the user is running
  // and ad blocker. This Promise can handle that case.
  async function addGoogleAnalyticsScript(dataLayerName = 'dataLayer') {
    return new Promise((resolve, reject) => {
      const head = document.head || document.getElementsByTagName('head')[0];

      const link = document.createElement('link');
      link.href = domain;
      link.rel = 'preconnect';
      head.appendChild(link);

      const script = document.createElement('script');
      script.async = true;
      script.src = `${domain}/gtag/js?id=${trackingId}&l=${dataLayerName}`;
      script.charset = 'utf-8';
      script.setAttribute('id', scriptId);

      head.appendChild(script);

      script.onload = resolve;
      script.onerror = reject;
    });
  }

  onMount(async () => {
    // We add the script only once even when the component rendered twice.
    if (window.document.getElementById(scriptId)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    gtag('js', new Date());
    gtag('config', trackingId);

    try {
      await addGoogleAnalyticsScript();
    } catch (err) {
      console.error('gtag failure');

      const s = window.document.getElementById(scriptId);

      if (s) {
        s.remove();
      }

      return;
    }

    mounted = true;
  });

  // Single page application handling
  $: {
    const page_path = $page.path;

    if (mounted && window.gtag) {
      gtag('config', trackingId, { page_path });
    }
  }
</script>
```
