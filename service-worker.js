const timestamp = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
};
const build = [
  "/_app/start-2d63391a.js",
  "/_app/pages/__layout.svelte-86e8d6de.js",
  "/_app/assets/pages/__layout.svelte-d2c48b10.css",
  "/_app/pages/__error.svelte-391b2434.js",
  "/_app/assets/pages/__error.svelte-e51d3d1c.css",
  "/_app/pages/index.svelte-91ab25de.js",
  "/_app/assets/pages/index.svelte-1dc1bfd3.css",
  "/_app/pages/libraries.svelte-05323028.js",
  "/_app/assets/pages/libraries.svelte-9750e4e4.css",
  "/_app/pages/subscribe.svelte-86c64966.js",
  "/_app/assets/TinyLetterSubscribeForm.svelte_svelte_type_style_lang-9e0ab98b.css",
  "/_app/pages/articles/__layout.svelte-021390c9.js",
  "/_app/pages/articles/_slug_.svelte-ecf25bae.js",
  "/_app/assets/pages/articles/_slug_.svelte-018a0eab.css",
  "/_app/pages/articles/_...pageNumber_.svelte-e1cd0ff9.js",
  "/_app/pages/about/_...lang_.svelte-0b446536.js",
  "/_app/assets/pages/about/_...lang_.svelte-1ff6df00.css",
  "/_app/pages/404.svelte-c53c241e.js",
  "/_app/pages/tag/__layout.svelte-ff74fbe0.js",
  "/_app/pages/tag/_tag_/_...pageNumber_.svelte-040a9472.js",
  "/_app/pages/go/_shortLink_.svelte-db673483.js",
  "/_app/chunks/vendor-5a586dca.js",
  "/_app/chunks/utils-ff69589d.js",
  "/_app/chunks/canonical-900febc8.js",
  "/_app/chunks/meta-25d41ac1.js",
  "/_app/chunks/Head-65e85eb2.js",
  "/_app/chunks/ArticleResume-34256fed.js",
  "/_app/assets/ArticleResume-ccd94292.css",
  "/_app/chunks/Tags-15c4387e.js",
  "/_app/chunks/Content-9541be76.js",
  "/_app/chunks/NProgress-21625922.js",
  "/_app/assets/NProgress-7fcf484f.css",
  "/_app/chunks/ArticleResumeList-68f41689.js",
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
