const timestamp = 1635113959543;
const build = [
  "/_app/start-20a81934.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-569d61ee.js",
  "/_app/assets/pages/__layout.svelte-09050466.css",
  "/_app/pages/__error.svelte-56a26390.js",
  "/_app/assets/pages/__error.svelte-e51d3d1c.css",
  "/_app/pages/index.svelte-52cd7d40.js",
  "/_app/assets/pages/index.svelte-1dc1bfd3.css",
  "/_app/pages/libraries.svelte-915e5743.js",
  "/_app/assets/pages/libraries.svelte-9750e4e4.css",
  "/_app/pages/subscribe.svelte-f6d0ee02.js",
  "/_app/pages/articles/__layout.svelte-bd0753d0.js",
  "/_app/pages/articles/[slug].svelte-5a1462cd.js",
  "/_app/assets/pages/articles/[slug].svelte-26e1d6ef.css",
  "/_app/pages/articles/[...pageNumber].svelte-cebdb06b.js",
  "/_app/pages/about/index.svelte-2316537c.js",
  "/_app/pages/about/[aboutLang].svelte-cf264d7d.js",
  "/_app/assets/pages/about/[aboutLang].svelte-a5f6e6e8.css",
  "/_app/pages/404.svelte-9852ccb9.js",
  "/_app/pages/tag/__layout.svelte-79e5e7c2.js",
  "/_app/pages/tag/[tag]/[...pageNumber].svelte-c65e99d7.js",
  "/_app/pages/go/[shortLink].svelte-6bc614eb.js",
  "/_app/chunks/vendor-9f491de5.js",
  "/_app/chunks/stores-1802c574.js",
  "/_app/chunks/utils-e6afcf3f.js",
  "/_app/chunks/canonical-4beebdc5.js",
  "/_app/chunks/meta-57d94e2f.js",
  "/_app/chunks/Head-c6b3857f.js",
  "/_app/chunks/ArticleResume-32cc35c0.js",
  "/_app/assets/ArticleResume-add4a638.css",
  "/_app/chunks/Tags-2ef12a56.js",
  "/_app/chunks/Content-e9ea0456.js",
  "/_app/chunks/TinyLetterSubscribeForm-7f297a22.js",
  "/_app/assets/TinyLetterSubscribeForm-6c58dc76.css",
  "/_app/chunks/ArticleResumeList-7a2269b4.js",
  "/_app/assets/ArticleResumeList-4d84972a.css"
];
const files = [
  "/favicon.ico",
  "/favicon.png",
  "/images/me-128x128.jpeg",
  "/images/me-650x650.jpeg",
  "/images/me.jpeg",
  "/images/share-default.png",
  "/images/svelte.png",
  "/logo-192.png",
  "/logo-512.png",
  "/logo.png",
  "/manifest.json",
  "/robots.txt",
  "/sitemap.xml"
];
const ASSETS = `cache${timestamp}`;
const to_cache = build.concat(files);
const cached = new Set(to_cache);
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(ASSETS).then((cache) => cache.addAll(to_cache)).then(() => {
    self.skipWaiting();
  }));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== ASSETS)
        await caches.delete(key);
    }
    self.clients.claim();
  }));
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith("http"))
    return;
  if (url.hostname === self.location.hostname && url.port !== self.location.port)
    return;
  if (url.host === self.location.host && cached.has(url.pathname)) {
    event.respondWith(caches.match(event.request));
    return;
  }
  if (event.request.cache === "only-if-cached")
    return;
  event.respondWith(caches.open(`offline${timestamp}`).then(async (cache) => {
    try {
      const response = await fetch(event.request);
      cache.put(event.request, response.clone());
      return response;
    } catch (err) {
      const response = await cache.match(event.request);
      if (response)
        return response;
      throw err;
    }
  }));
});
