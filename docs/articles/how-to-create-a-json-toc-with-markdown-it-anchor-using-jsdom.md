---
id: 2
date: '2020-09-18' 
title: 'How to create a JSON table of contents with markdown-it and markdown-it-anchor'
description: Steps by step guide parse your markdown's HTML at compile stage using node and jsdom with full github repository.
intro: |
    There are some plugins to create a table of content using markdown-it, but sometimes you want to create a custom component for rendering your TOC.

    Here a simple example on how to get the table of content's tree with vanilla javascript without writing any markdown-it plugin.

    ::: gnome-terminal-image "demo" "https://raw.githubusercontent.com/angelblanco/demo-markdown-it-anchor-toc-jsdom/master/demo.gif"
tags: ['js', 'node', 'github']
---
## Basic markdown it setup

> If you want to skip this process and run the demo on your personal computer you can clone the demo repository on Github
> ::: github-link https://github.com/angelblanco/demo-markdown-it-anchor-toc-jsdom Clone the demo of this article on Github

On your javascript application, we want to install some dependencies first.

```bash
yarn add --dev markdown-it markdown-it-anchor
```

Now let's convert some simple markdown to Html:

```javascript
// demo.js
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt()
    .use(require("markdown-it-anchor"));

const markdownText = `
# First header
Some content

## Second-level header
More content
### Third level header
## Another second-level header
`;

const html = md.render(markdownText);

console.log({ html });
```

## Plain table of content

The first approach will be to create a plain TOC, that returns a one level array with the title, the anchor, and the associated level. Using this type of TOC could give you a really clear component, avoiding the extra complexity of recursion.

```javascript
function createPlainToc(domElement) {
    const headers = Array.from(domElement.querySelectorAll('h1, h2, h3, h4, h5, h6, h7'));

    // This will create a plain array with the level, the anchor and the header title
    return headers.map((header) => ({
        level: parseInt(header.tagName[1], 10),
        title: header.textContent,
        anchor: '#' + header.getAttribute('id'),
    }));
};
```

Using the above markdown text, it will return us the following output:

```javascript
[
  { level: 1, title: 'First header', anchor: '#first-header' },
  { level: 2, title: 'Second level header',anchor: '#second-level-header' },
  { level: 3, title: 'Third level header', anchor: '#third-level-header' },
  { level: 2, title: 'Another second level header', anchor: '#another-second-level-header' }
]
```

> Alternatively you can test the above function with this page itself. You can copy the function and run
> the following code on the browser's console
> ```javascript
> console.log(JSON.stringify(
>   createPlainToc(window.document.querySelector('.articleBody'))
> ));
>```

## Tree table of content

Most of the time we will be interested in creating a tree representation of the data.
In this way, we can create a recursive component that runs through the tree. We can reuse our previous function and build the data using a stack and tacking advantage of object references in Javascript. We must perform two validations:

1. We force all root nodes to have the same level, but not a minimum one.
2. We force all children nodes to have the parent's level + 1.

```javascript
function createTreeToc(domElement, throwOnNotTree = true) {
    const treeItems = createPlainToc(domElement)
        .map(item => ({ ...item, children: [] }));

    const tree = [];
    const stack = [];
    treeItems.forEach((item) => {
        let parentItem = null;
        do {
            parentItem = stack.pop();
        } while (parentItem && parentItem.level >= item.level);

        if (!parentItem) {
            // All nodes in tree[] must have the same level. 
            const prevTreeItem = tree.pop();
            if (prevTreeItem) {
                if (throwOnNotTree && item.level !== prevTreeItem.level) {
                    throw new Error(`Root titles dont have same level on: "${item.title}"`);
                }

                tree.push(prevTreeItem);
            }

            tree.push(item);
            stack.push(item);
        } else {
            if (throwOnNotTree && parentItem.level !== (item.level - 1)) {
                // All nodes in tree[] must have the same level. 
                throw new Error(
                    `The title "${item.title}" is not a direct children of its parent`
                );
            }

            stack.push(parentItem);
            stack.push(item);
            parentItem.children.push(item);
        }
    });

    return tree;
}
```

Using the previous markdown we will have a well-defined tree for each top-level header and their associated children.

```javascript
[
  {
    level: 1,
    title: 'First header',
    anchor: '#first-header',
    children: [
      {
        level: 2,
        title: 'Second level header',
        anchor: '#second-level-header',
        children: [
          { level: 3, title: 'Third level header', anchor: '#third-level-header', children: []}
        ]
      },
      {
        level: 2,
        title: 'Another second level header',
        anchor: '#another-second-level-header',
        children: []
      }
    ]
  }
]
``` 

Of course opening the dev tools you can paste the previous functions, an test it with this page!

```javascript
console.log(
  JSON.stringify(createTreeToc(window.document.querySelector('.articleBody')))
); 
```

## Create the tables of content on the server-side with jsdom

If you want to create the TOC on your node server or at the moment of compiling your markdown files, we can reuse our functions by installing [jsdom](https://github.com/jsdom/jsdom).

```bash
yarn add --dev jsdom
``` 

As the Html will be the hole markdown file we can create the table of content for the whole `window.document`.

```javascript
// Asuming that html is the rendered markdown with html and nothing else.
const domElement = (new jsdom.JSDOM(html)).window.document;

const toc = createTreeToc(domElement);

console.log(JSON.stringify(toc)); 
```

Using this last approach its how I set up a simple demo on Github.

::: github-link https://github.com/angelblanco/demo-markdown-it-anchor-toc-jsdom Clone the demo of this article on Github

## Conclusion

Using `jsdom` to parse the whole HTML file to get the table of content might look like an overhead. However, doing this stuff at
your javascript compile stage will get you the fastest loading times for your web because it could be server-side rendered. On the other hand,
if you parse your TOC in the browser you could access all the DOM elements on the web and not only the markdown ones.

Thank you very much for your time. Hope to see you again :rocket:
