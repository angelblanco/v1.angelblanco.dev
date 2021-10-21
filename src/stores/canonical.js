import trim from 'lodash/trim';
import { getStores } from "$app/stores";
import { derived } from 'svelte/store';

export function getCanonicalUrlForFile(file) {
    return `${import.meta.env.APP_BASE_URL}/${trim(file, '/')}`;
}

export function getCanonicalUrlForPath(path) {
    const base = trim(getCanonicalUrlForFile(path), '/');

    // Github pages redirects to `/` by default and we need to trim the hole url for the base path.
    return `${base}/`;
}

export default() => {
    const { page } = getStores();

    return derived(page, $page => getCanonicalUrlForPath($page.path));
} 
