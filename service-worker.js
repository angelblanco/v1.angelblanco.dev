const build = [
  "/_app/start-0bb85dfa.js",
  "/_app/pages/__layout.svelte-79f466b7.js",
  "/_app/assets/pages/__layout.svelte-d2c48b10.css",
  "/_app/pages/__error.svelte-8bdb086a.js",
  "/_app/assets/pages/__error.svelte-e51d3d1c.css",
  "/_app/pages/articles/__layout.svelte-0ba19772.js",
  "/_app/pages/tag/__layout.svelte-8f875bda.js",
  "/_app/pages/404.svelte-7ac9ed05.js",
  "/_app/pages/about/_...lang_.svelte-ca0e5746.js",
  "/_app/assets/pages/about/_...lang_.svelte-1ff6df00.css",
  "/_app/pages/articles/_...pageNumber_.svelte-ba9fa7a1.js",
  "/_app/pages/articles/_slug_.svelte-e3005b53.js",
  "/_app/assets/pages/articles/_slug_.svelte-018a0eab.css",
  "/_app/assets/TinyLetterSubscribeForm.svelte_svelte_type_style_lang-9e0ab98b.css",
  "/_app/pages/go/_shortLink_.svelte-3aa9a06b.js",
  "/_app/pages/index.svelte-ba93187b.js",
  "/_app/assets/pages/index.svelte-1dc1bfd3.css",
  "/_app/pages/libraries.svelte-637bdfbe.js",
  "/_app/assets/pages/libraries.svelte-9750e4e4.css",
  "/_app/pages/subscribe.svelte-f0b88ed2.js",
  "/_app/pages/tag/_tag_/_...pageNumber_.svelte-f5138475.js",
  "/_app/chunks/index-047e673f.js",
  "/_app/chunks/index-a898a6a8.js",
  "/_app/chunks/utils-480c8ecb.js",
  "/_app/chunks/canonical-09a4e5e1.js",
  "/_app/chunks/meta-26c41c91.js",
  "/_app/chunks/trimEnd-c543d9cd.js",
  "/_app/chunks/Content-08727e80.js",
  "/_app/chunks/Head-52212885.js",
  "/_app/chunks/NProgress-24b60464.js",
  "/_app/assets/NProgress-7fcf484f.css",
  "/_app/chunks/ArticleResumeList-4cbcdd09.js",
  "/_app/assets/ArticleResumeList-d539c960.css",
  "/_app/chunks/ArticleResume-b481e590.js",
  "/_app/assets/ArticleResume-ccd94292.css",
  "/_app/chunks/Tags-1eb83d59.js"
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
const version = "1650394379532";
const ASSETS = `cache${version}`;
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
