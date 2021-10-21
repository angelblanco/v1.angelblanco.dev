const fixedTagName = (name) => name.toLowerCase().trim().replace(' ', '-');

const blogTag = {
  title: 'Blog',
  icon: 'fas fa-blog',
  color: '#209cee',
  tag: 'blog',
  topic: false,
};

// Available tags with parent tag when needed in order to be displayed
// On the side bar.
const availableTags = [
  // TODO: Enable it on first PHP Article
  // {
  //   title: 'PHP',
  //   icon: 'fab fa-php',
  //   color: '#7478ae',
  //   tag: 'php'
  // },
  // {
  //   title: 'Laravel',
  //   icon: 'fab fa-laravel',
  //   color: '#ef3b2d',
  //   tag: 'laravel',
  //   parent: 'php',
  // },
  {
    title: 'Javascript',
    icon: 'fab fa-js',
    color: '#f2d73c',
    tag: 'js',
  },
  {
    title: 'Svelte',
    img: '/images/svelte.png',
    color: '#ff450a',
    tag: 'svelte',
    parent: 'js',
  },
  // TODO: Enable it on first vue js article
  // {
  //   title: 'Vue Js',
  //   icon: 'fab fa-vuejs',
  //   color: '#3fb37f',
  //   tag: 'vue',
  //   parent: 'js',
  // },
  {
    title: 'Node JS',
    icon: 'fab fa-node-js',
    color: '#80bd01',
    tag: 'node',
    parent: 'js',
  },
  {
    title: 'Docker',
    icon: 'fab fa-docker',
    color: '#006cb1',
    tag: 'docker',
  },
  {
    title: 'Articles with Github code',
    icon: 'fab fa-github',
    color: '#24292e',
    tag: 'github',
    topic: false,
  },
  blogTag,
]
  .map((item) => ({
    ...item,
    tag: fixedTagName(item.tag),
    topic: item.topic !== false,
  }))
  .map((item) => ({ ...item, url: `/tag/${item.tag}/` }));

export function getTag(tag) {
  const fixedTag = fixedTagName(tag);

  return availableTags.find((item) => item.tag === fixedTag);
}

export const getTags = (names) => names.map(getTag);

export const tags = availableTags.filter((tag) => tag.tag !== 'blog');

const isArticleSectionTag = (tag) => tag.topic === false;

export const sidebarMenu = [
  {
    title: 'Articles',
    items: [
      {
        title: 'Latest articlest',
        url: '/articles/',
        tag: 'info',
      },
      ...tags.filter(isArticleSectionTag),
    ],
  },
  {
    title: 'Topic',
    items: tags
      .filter((tag) => !isArticleSectionTag(tag))
      .reduce((result, currTag) => {
        const currentTag = Object.assign({}, currTag);

        if (currentTag.parent) {
          const parentTag = result.find((tag) => tag.tag === currentTag.parent);

          if (!parentTag.items) {
            parentTag.items = [];
          }

          parentTag.items.push(currentTag);
        } else {
          result.push(currentTag);
        }

        return result;
      }, []),
  },
  {
    title: 'Others',
    items: [
      {
        title: 'Newsletter',
        url: '/subscribe/',
        tag: 'info',
      },
    ],
  },
];
