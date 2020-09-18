---
id: 4
title: "Simple Svelte back to top component"
date: "2020-09-26"
description: "Learn how to create a back to top button in Svelte 3."
intro: |
    Creating a button that returns the user to the top the page is a simple task that could be easily achieved with any javascript framework and some basic styling. Learning how to build this kind of simple components could be a good quick start for Svelte 3.
tags: ['svelte', 'js', 'blog']
---

## Analyzing the problem

> If you want to skip the reading you can directly check the demo with the source coude by your self!
> ::: svelte-repl-link https://svelte.dev/repl/cb199730e83f41beb484ff522c64bec1 Simple Svelte Back To Top Button Demo

To achieve our goal we must fulfil 3 steps:

- Create a Svelte component that renders a button on a fixed place on the viewport.
- Scroll to top of the page on click.
- Show or hide the button based on the amount of scroll of the user.

### Positioning the icon

irst of all, we will create a new File `BackToTop.svelte` that will contain our component. 
We can put a fixed icon with 20px of distance from the bottom right corner using some styling and a simple div.  

If you know ES6 and HTML you will know most of the concepts of Svelte itself. This will 
also let you incorporate vanilla js libraries without too much overhead 

```html
<style>
  .back-to-top {
    opacity: 1;
    position: fixed;
    z-index: 99;
    right: 20px;
    user-select: none;
    bottom: 20px;
    color: white;
    background-color: black;
    padding: 10px;
  }
</style>

<div class="back-to-top">
	Back to top
</div>
``` 

### How to go top
Once our button is rendered, we must handle click event with a function that goes all the way up. In order to go the top of the any page we can simply scroll in to view the document body.

```js
<script>
  function goTop() {
      document.body.scrollIntoView();
  }
</script>

<div class="back-to-top" on:click={goTop}>
	Back to top
</div>
```

### Show or hide the button based on scrollTop

It doesn't make sense for the component to be visible when the user hasn't scrolled a single pixel. So we export a prop with the necessary number of pixels to show or hide the button. Additionally we can use an internal variable to tell if the button is hidden or not.

Please notice the `class:hidden` syntax sugar for this kind of class flags use cases. Personally I think its a great improvement from other frameworks in components that could have lots of states based on booleans like butons: secondary, disabled, clicked, etc.
```html
<script>
  export let showOnPx = 150;
  let hidden = true;

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden>Back to top</div>
```

## Final component

Summing up we have a black button that returns the user to the top of the page and hides or show itself at a certain pixel when the user scrolls the page.

With this concept you migth apply some additions:
- Style the button with an icon.
- Hide and change the position of the button media query.

I've build the back top top component for my blog using bulma and fontawesome.

Considering building your own back to top, [checkout the demo!]( https://svelte.dev/repl/cb199730e83f41beb484ff522c64bec1?version=3.22.2)

```html
 <script>
  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<style>
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 20px;
    user-select: none;
    bottom: 20px;
    color: white;
    background-color: black;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden>Back to top</div>
```