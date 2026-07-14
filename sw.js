/* Osudoku service worker — cache-first with background refresh.
   The game is a single page; once loaded it works fully offline.
   index.html is re-fetched in the background on every online visit,
   so updates arrive on the next launch without a version bump here.
   Bump the cache name only if the set of cached URLs changes. */
"use strict";

const CACHE = "osudoku-v1";
const ASSETS = ["./", "./index.html", "./sw.js"];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const cached = caches.match(req, { ignoreSearch: true });
  const refresh = fetch(req).then(async res => {
    if (res.ok) {
      const cache = await caches.open(CACHE);
      await cache.put(req, res.clone());
    }
    return res;
  });
  e.waitUntil(refresh.catch(() => {}));
  e.respondWith(cached.then(hit => hit || refresh));
});
