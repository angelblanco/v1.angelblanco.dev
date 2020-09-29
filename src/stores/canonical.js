import trim from 'lodash/trim';
import { stores as sapperStores } from "@sapper/app";
import { derived } from 'svelte/store';

export function getCanonicalUrlForFile(file) {
    return `${process.env.APP_BASE_URL}/${trim(file, '/')}`;
}

export function getCanonicalUrlForPath(path) {
    const base = trim(getCanonicalUrlForFile(path), '/');

    // Github pages redirects to `/` by default and we need to trim the hole url for the base path.
    return `${base}/`;
}

export default() => {
    const { page } = sapperStores();

    return derived(page, $page => getCanonicalUrlForPath($page.path));
} 
