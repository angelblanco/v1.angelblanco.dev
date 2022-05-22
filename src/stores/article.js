import { writable, derived } from 'svelte/store';
import { onDestroy } from 'svelte';
import { getCanonicalUrlForPath } from './canonical';

export const article = writable(null);

export function setArticle(newArticle) {
  article.set(newArticle);

  onDestroy(() => article.set(null));
}

export const shareLinks = derived(article, ($article) => {
  if (!$article) {
    return null;
  }

  const twitterTitle = $article?.meta?.share_tweet || $article.title;

  const base = {
    title: $article.title,
    twitterTitle,
    encodedTitle: encodeURI($article.title),
    encodedTwitterTitle: encodeURI(twitterTitle),
    shortUrl: getCanonicalUrlForPath($article.shortLink),
    url: getCanonicalUrlForPath($article.url),
  };

  const shareItems = {
    ...base,
    encodedUrl: encodeURI(base.url),
    encodedShortUrl: encodeURI(base.shortUrl),
  };

  return {
    twitter: {
      name: 'Twitter',
      icon: 'fa-twitter',
      intent: `https://twitter.com/intent/tweet?url=${
        shareItems.encodedUrl
      }&text=${shareItems.encodedTwitterTitle}&via=${
        import.meta.env.VITE_TWITTER_USER
      }`,
    },
    facebook: {
      name: 'Facebook',
      icon: 'fa-facebook',
      intent: `https://wwww.facebook.com/share.php?u=${shareItems.encodedUrl}&t=${shareItems.encodedTitle}`,
    },
    linkedin: {
      name: 'Linkedin',
      icon: 'fa-linkedin-in',
      intent: `https://www.linkedin.com/sharing/share-offsite/?url=${shareItems.encodedUrl}`,
    },
  };
});
