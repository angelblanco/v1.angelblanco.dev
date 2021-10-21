import { writable } from 'svelte/store';
import { onDestroy } from 'svelte';
import canonical, { getCanonicalUrlForPath, getCanonicalUrlForFile } from './canonical';

export const defaults = {
    title: import.meta.env.VITE_APP_BASE_TITLE,
    ogTitle: import.meta.env.VITE_APP_BASE_TITLE,
    ogDescription: 'A personal web development blog focused on Javascript, Vue, Svelte, PHP, Laravel, Docker, back-end, front-end, microservices, Linux, Zsh, and more.',
    ogImageUrl: getCanonicalUrlForFile('/images/share-default.png'),
    ogUrl: null,
};

export const title = writable(defaults.title);
export const ogTitle = writable(defaults.ogTitle);
export const ogDescription = writable(defaults.ogDescription);
export const getOgUrl = () => canonical().url;
export const ogImageUrl = writable(defaults.ogImageUrl);
export const ogImageWidth = writable(1200);
export const ogImageHeight = writable(630);
export const ogUrl = writable(defaults.ogUrl);

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
        ogImageUrl.set(getCanonicalUrlForFile(url));
    }

    onDestroy(() => ogImageUrl.set(defaults.ogImageUrl));
}

export function setOgUrl(url) {
    ogUrl.set(getCanonicalUrlForPath(url));

    onDestroy(() => ogUrl.set(defaults.ogUrl));
}