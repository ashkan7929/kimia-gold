const CACHE_NAME = "my-pwa-cache-v1";
const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/photo192.jpeg", 
  "/photo512.jpeg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.map((n) => n !== CACHE_NAME && caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.method !== "GET") return;

  if (req.mode === "navigate") {
    event.respondWith(
      caches.match("/index.html")
        .then((cached) => cached || fetch(req))
        .catch(() => caches.match("/index.html"))
    );
    return;
  }

  const url = new URL(req.url);

  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req)
      .then((cached) => cached || fetch(req))
      .catch(() => {
        return new Response("Offline", { status: 503, statusText: "Offline" });
      })
  );
});
