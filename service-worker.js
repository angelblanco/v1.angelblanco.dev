const timestamp = 1636295478027;
const build = [
  "/_app/start-5c983181.js",
  "/_app/assets/start-61d1577b.css",
  "/_app/pages/__layout.svelte-6e53a516.js",
  "/_app/assets/pages/__layout.svelte-63ac35d5.css",
  "/_app/pages/__error.svelte-f02e272f.js",
  "/_app/assets/pages/__error.svelte-e51d3d1c.css",
  "/_app/pages/index.svelte-6a675591.js",
  "/_app/assets/pages/index.svelte-1dc1bfd3.css",
  "/_app/pages/libraries.svelte-2421784e.js",
  "/_app/assets/pages/libraries.svelte-9750e4e4.css",
  "/_app/pages/subscribe.svelte-9748a147.js",
  "/_app/assets/TinyLetterSubscribeForm.svelte_svelte&type=style&lang-f725ae09.css",
  "/_app/pages/articles/__layout.svelte-33fc7436.js",
  "/_app/pages/articles/[slug].svelte-63a643c8.js",
  "/_app/assets/pages/articles/[slug].svelte-6fb07c71.css",
  "/_app/pages/articles/[...pageNumber].svelte-e9d6d84b.js",
  "/_app/pages/about/[...lang].svelte-a8ae2bc1.js",
  "/_app/assets/pages/about/[...lang].svelte-2d043004.css",
  "/_app/pages/404.svelte-00ad0e61.js",
  "/_app/pages/tag/__layout.svelte-3effd377.js",
  "/_app/pages/tag/[tag]/[...pageNumber].svelte-a64532c7.js",
  "/_app/pages/go/[shortLink].svelte-9b42a44e.js",
  "/_app/chunks/vendor-4707b3b4.js",
  "/_app/chunks/utils-c6d23825.js",
  "/_app/chunks/canonical-e5246bc6.js",
  "/_app/chunks/meta-fc16225c.js",
  "/_app/chunks/Head-712ff76e.js",
  "/_app/chunks/ArticleResume-26720b80.js",
  "/_app/assets/ArticleResume-ccd94292.css",
  "/_app/chunks/Tags-16f0ca5f.js",
  "/_app/chunks/Content-82d68f30.js",
  "/_app/chunks/ArticleResumeList-e97ccd0a.js",
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
