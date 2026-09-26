const CACHE_VERSION = "20260926-life-ai1";
const APP_CACHE = `manabi-app-${CACHE_VERSION}`;
const MEDIA_CACHE = `manabi-media-${CACHE_VERSION}`;
const CACHE_PREFIX = "manabi-";

const APP_FILES = [
  "./",
  "./index.html",
  "./app.js?v=20260926-life-ai1",
  "./style.css?v=20260920-smooth-drag1",
  "./manifest.webmanifest",
  "./apple-touch-icon.png",
  "./icon.png",
  "./ball.png",
  "./grass.png",
  "./correct.mp3",
  "./wrong.mp3",
  "./throw.mp3",
  "./shake.mp3",
  "./catch.mp3",
  "./get.mp3",
  "./escape.mp3",
  "./bgm-home.mp3",
  "./bgm-facility-01.mp3",
  "./bgm-facility-02.mp3",
  "./bgm-facility-03.mp3",
  "./bgm-facility-04.mp3",
  "./bgm-facility-05.mp3",
  "./bgm-facility-06.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(APP_CACHE)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== APP_CACHE && key !== MEDIA_CACHE)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(APP_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) await cache.put(request, response.clone());
    return response;
  } catch (_) {
    return (await cache.match(request))
      || (request.mode === "navigate" && await cache.match("./index.html"))
      || Response.error();
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok || response.type === "opaque") {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (_) {
    return Response.error();
  }
}

async function cachedAudioRange(request) {
  const cache = await caches.open(APP_CACHE);
  let response = await cache.match(request.url);
  if (!response) {
    try {
      response = await fetch(request.url);
      if (!response.ok) return response;
      await cache.put(request.url, response.clone());
    } catch (_) {
      return Response.error();
    }
  }

  const range = /^bytes=(\d+)-(\d*)$/.exec(request.headers.get("range") || "");
  if (!range) return response;
  const bytes = await response.arrayBuffer();
  const start = Number(range[1]);
  const end = range[2] ? Math.min(Number(range[2]), bytes.byteLength - 1) : bytes.byteLength - 1;
  if (start >= bytes.byteLength || end < start) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${bytes.byteLength}` }
    });
  }
  return new Response(bytes.slice(start, end + 1), {
    status: 206,
    headers: {
      "Accept-Ranges": "bytes",
      "Content-Length": String(end - start + 1),
      "Content-Range": `bytes ${start}-${end}/${bytes.byteLength}`,
      "Content-Type": response.headers.get("Content-Type") || "audio/mpeg"
    }
  });
}

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const appUrl = new URL(self.registration.scope);
  const isAppFile = url.origin === appUrl.origin && url.pathname.startsWith(appUrl.pathname);
  const isPokemonMedia = url.hostname === "raw.githubusercontent.com"
    && (url.pathname.startsWith("/PokeAPI/sprites/") || url.pathname.startsWith("/PokeAPI/cries/"));

  if (isPokemonMedia) {
    event.respondWith(cacheFirst(request, MEDIA_CACHE));
  } else if (isAppFile) {
    if (/\.mp3$/.test(url.pathname) && request.headers.has("range")) {
      event.respondWith(cachedAudioRange(request));
      return;
    }
    const isDocumentOrCode = request.mode === "navigate"
      || /\.(?:html|js|css|webmanifest)$/.test(url.pathname);
    event.respondWith(isDocumentOrCode
      ? networkFirst(request)
      : cacheFirst(request, APP_CACHE));
  }
});
