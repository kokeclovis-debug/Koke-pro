const CACHE_NAME = "koke-pro-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./user%20app.html",
  "./manifest.json",
  "./icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
