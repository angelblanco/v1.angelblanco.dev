import trim from 'lodash/trim.js';
import { getStores } from '$app/stores';
import { derived } from 'svelte/store';

export function getCanonicalUrlForFile(file) {
  return `${import.meta.env.VITE_APP_BASE_URL}/${trim(file, '/')}`;
}

export function getCanonicalUrlForPath(path) {
  return trim(getCanonicalUrlForFile(path), '/');
}

export default () => {
  const { page } = getStores();

  return derived(page, ($page) => getCanonicalUrlForPath($page.url.pathname));
};
