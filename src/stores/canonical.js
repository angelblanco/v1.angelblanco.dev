import trim from 'lodash/trim';
import { stores as sapperStores } from "@sapper/app";
import { derived } from 'svelte/store';

export function getCanonicalUrlForPath(path) {
    return `${process.env.APP_BASE_URL}/${trim(path, '/')}`;
}

let stores = null;
export default function () {
    if (stores === null) {
        const { page } = sapperStores();

        stores = {
            url: derived(page, $page => getCanonicalUrlForPath($page.path)),
        };
    }

    return stores;
};
