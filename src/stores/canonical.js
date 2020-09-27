import trim from 'lodash/trim';
import { stores as sapperStores } from "@sapper/app";
import { derived, get } from 'svelte/store';

export function getCanonicalUrlForPath(path) {
    const base = trim(`${process.env.APP_BASE_URL}/${trim(path, '/')}`, '/');

    // Github pages redirects to `/` by default and we need to trim the hole url for the base path.
    return `${base}/`;
}

export default() => {
    const { page } = sapperStores();

    return derived(page, $page => getCanonicalUrlForPath($page.path));
} 

// let stores = null;
// export default function () {
//     if (stores === null) {
//         const { page } = sapperStores();

//         stores = {
//             url: derived(page, $page => getCanonicalUrlForPath($page.path)),
//         };
//     }

//     return stores;
// };
