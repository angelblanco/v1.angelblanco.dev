import { writable } from 'svelte/store';
import { onDestroy } from 'svelte';
import canonical, { getCanonicalUrlForPath } from './canonical';

export const defaults = {
    title: process.env.APP_BASE_TITLE,
    ogTitle: process.env.APP_BASE_TITLE,
    ogDescription: 'Web development posts',
    ogImageUrl: getCanonicalUrlForPath('/images/share-default.png'),
};

export const title = writable(defaults.title);
export const ogTitle = writable(defaults.ogTitle);
export const ogDescription = writable(defaults.ogDescription);
export const getOgUrl = () => canonical().url;
export const ogImageUrl = writable(defaults.ogImageUrl);

export function setTitle(prefixTitle) {
    title.set(`${prefixTitle} - ${defaults.title}`);
    ogTitle.set(prefixTitle);

    onDestroy(() => {
        title.set(defaults.title);
        ogTitle.set(defaults.title);
    });
}

export function setOgDescription(description) {
    ogDescription.set(description);

    onDestroy(() => ogDescription.set(defaults.ogDescription));
}

export function setOgImageUrl(url) {
    if (url.includes('http')) {
        ogImageUrl.set(url);
    } else {
        ogImageUrl.set(getCanonicalUrlForPath(url));
    }

    onDestroy(() => ogImageUrl.set(defaults.ogImageUrl));
}
