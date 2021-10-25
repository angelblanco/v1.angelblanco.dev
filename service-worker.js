const timestamp = 1635198799500;
const build = [
  "/_app/start-c4bf4bfd.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-0242026e.js",
  "/_app/assets/pages/__layout.svelte-09050466.css",
  "/_app/pages/__error.svelte-d860d2bd.js",
  "/_app/assets/pages/__error.svelte-e51d3d1c.css",
  "/_app/pages/index.svelte-331d9a24.js",
  "/_app/assets/pages/index.svelte-1dc1bfd3.css",
  "/_app/pages/libraries.svelte-adeae179.js",
  "/_app/assets/pages/libraries.svelte-9750e4e4.css",
  "/_app/pages/subscribe.svelte-cf6cf073.js",
  "/_app/pages/articles/__layout.svelte-9d7e50cc.js",
  "/_app/pages/articles/[slug].svelte-4c77d56b.js",
  "/_app/assets/pages/articles/[slug].svelte-26e1d6ef.css",
  "/_app/pages/articles/[...pageNumber].svelte-34161846.js",
  "/_app/pages/about/[...lang].svelte-632ed594.js",
  "/_app/assets/pages/about/[...lang].svelte-2d043004.css",
  "/_app/pages/404.svelte-e77b952a.js",
  "/_app/pages/tag/__layout.svelte-9f6b8f7c.js",
  "/_app/pages/tag/[tag]/[...pageNumber].svelte-582f7035.js",
  "/_app/pages/go/[shortLink].svelte-3a59fea5.js",
  "/_app/chunks/vendor-684f99aa.js",
  "/_app/chunks/stores-369a1320.js",
  "/_app/chunks/utils-09e926ca.js",
  "/_app/chunks/canonical-6848aa09.js",
  "/_app/chunks/meta-ccd61427.js",
  "/_app/chunks/Head-4b7dea2f.js",
  "/_app/chunks/ArticleResume-1832715f.js",
  "/_app/assets/ArticleResume-add4a638.css",
  "/_app/chunks/Tags-c67a558f.js",
  "/_app/chunks/Content-f577799f.js",
  "/_app/chunks/TinyLetterSubscribeForm-f104655e.js",
  "/_app/assets/TinyLetterSubscribeForm-6c58dc76.css",
  "/_app/chunks/ArticleResumeList-99c78c4d.js",
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
