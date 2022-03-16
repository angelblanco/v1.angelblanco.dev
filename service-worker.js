const timestamp = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
};
const build = [
  "/_app/start-f8140ddd.js",
  "/_app/pages/__layout.svelte-97c00a7f.js",
  "/_app/assets/pages/__layout.svelte-5c496c17.css",
  "/_app/pages/__error.svelte-b725e3d2.js",
  "/_app/assets/pages/__error.svelte-e51d3d1c.css",
  "/_app/pages/index.svelte-a05a6f89.js",
  "/_app/assets/pages/index.svelte-1dc1bfd3.css",
  "/_app/pages/libraries.svelte-fe0e4f70.js",
  "/_app/assets/pages/libraries.svelte-9750e4e4.css",
  "/_app/pages/subscribe.svelte-81f42f6d.js",
  "/_app/assets/TinyLetterSubscribeForm.svelte_svelte_type_style_lang-9e0ab98b.css",
  "/_app/pages/articles/__layout.svelte-e94d3e2a.js",
  "/_app/pages/articles/_slug_.svelte-5a52e418.js",
  "/_app/assets/pages/articles/_slug_.svelte-39d0f134.css",
  "/_app/pages/articles/_...pageNumber_.svelte-8cb9dc1d.js",
  "/_app/pages/about/_...lang_.svelte-05f3e405.js",
  "/_app/assets/pages/about/_...lang_.svelte-bc991b37.css",
  "/_app/pages/404.svelte-6e411916.js",
  "/_app/pages/tag/__layout.svelte-35372ad4.js",
  "/_app/pages/tag/_tag_/_...pageNumber_.svelte-ea50b0f0.js",
  "/_app/pages/go/_shortLink_.svelte-84c6deea.js",
  "/_app/chunks/vendor-54c6ab91.js",
  "/_app/chunks/utils-123120c2.js",
  "/_app/chunks/canonical-fdacf4d6.js",
  "/_app/chunks/meta-ebf74df4.js",
  "/_app/chunks/Head-46f166e7.js",
  "/_app/chunks/ArticleResume-2333cc8e.js",
  "/_app/assets/ArticleResume-ccd94292.css",
  "/_app/chunks/Tags-89f21549.js",
  "/_app/chunks/Content-2ed3ba46.js",
  "/_app/chunks/ArticleResumeList-4e99035d.js",
  "/_app/assets/ArticleResumeList-d539c960.css"
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
