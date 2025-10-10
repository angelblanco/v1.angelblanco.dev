const build = [
  "/_app/start-a3ebef25.js",
  "/_app/pages/__layout.svelte-ecf8e07e.js",
  "/_app/assets/pages/__layout.svelte-98c999d3.css",
  "/_app/pages/__error.svelte-b57ab274.js",
  "/_app/assets/pages/__error.svelte-e51d3d1c.css",
  "/_app/pages/__layout-blank.svelte-d994488c.js",
  "/_app/pages/articles/__layout.svelte-41711608.js",
  "/_app/pages/tag/__layout.svelte-6bfb9886.js",
  "/_app/pages/404.svelte-d030a87d.js",
  "/_app/pages/about/_...lang_.svelte-6d909f83.js",
  "/_app/assets/pages/about/_...lang_.svelte-b379b1b0.css",
  "/_app/pages/articles/_...pageNumber_.svelte-5c6b79d8.js",
  "/_app/pages/articles/_slug_notInteger_.svelte-961584a4.js",
  "/_app/assets/pages/articles/_slug_notInteger_.svelte-18eb4c98.css",
  "/_app/assets/TinyLetterSubscribeForm.svelte_svelte_type_style_lang-9e0ab98b.css",
  "/_app/pages/go/_shortLink_.svelte-279e2694.js",
  "/_app/pages/index.svelte-dc7c420e.js",
  "/_app/assets/pages/index.svelte-1dc1bfd3.css",
  "/_app/pages/libraries.svelte-9f3f5696.js",
  "/_app/assets/pages/libraries.svelte-9750e4e4.css",
  "/_app/pages/ogImage/index@blank.svelte-b5b9698b.js",
  "/_app/assets/pages/ogImage/index@blank.svelte-b77627cf.css",
  "/_app/assets/fallback-f7ae3bd3.svg",
  "/_app/assets/docker-7733853a.svg",
  "/_app/assets/js-24c8fafe.svg",
  "/_app/assets/laravel-ebbbddae.svg",
  "/_app/assets/php-639853f4.svg",
  "/_app/pages/subscribe.svelte-e2a8e80f.js",
  "/_app/pages/tag/_tag_/_...pageNumber_.svelte-de1a9687.js",
  "/_app/chunks/index-a406831b.js",
  "/_app/chunks/index-0a8cc7fc.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/stores-337efdd9.js",
  "/_app/chunks/utils-fe75466e.js",
  "/_app/chunks/canonical-0a468a43.js",
  "/_app/chunks/meta-09306051.js",
  "/_app/chunks/trimEnd-39b59523.js",
  "/_app/chunks/Content-2fda7f2d.js",
  "/_app/chunks/Head-c7f3e1a4.js",
  "/_app/chunks/NProgress-93ad5864.js",
  "/_app/assets/NProgress-7fcf484f.css",
  "/_app/chunks/ArticleResumeList-4874a517.js",
  "/_app/assets/ArticleResumeList-d539c960.css",
  "/_app/chunks/ArticleResume-ef029abf.js",
  "/_app/assets/ArticleResume-ccd94292.css",
  "/_app/chunks/Tags-24a012f4.js",
  "/_app/chunks/TagManager-c04ec324.js"
];
const files = [
  "/favicon.ico",
  "/favicon.png",
  "/images/profile-128x128.jpeg",
  "/images/profile-600x600.jpeg",
  "/images/share-angel-blanco-dev.png",
  "/images/svelte.png",
  "/logo-192.png",
  "/logo-512.png",
  "/logo.png",
  "/manifest.json",
  "/robots.txt",
  "/share/about-me-en.png",
  "/share/add-gtag-analytics-to-sapper.png",
  "/share/how-to-create-a-json-toc-with-markdown-it-anchor-using-jsdom.png",
  "/share/install-docker-and-docker-compose-on-ubunt-20.04.png",
  "/share/open-graph-images-svelte-kit.png",
  "/share/simple-svelte-back-to-top.png",
  "/share/welcome.png",
  "/sitemap.xml"
];
const version = "1760135621651";
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
  event.respondWith(caches.open(`offline${version}`).then(async (cache) => {
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
