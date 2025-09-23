const CACHE_NAME = "my-pwa-cache-v1";
const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/photo192.jpeg", 
  "/photo512.jpeg"
];

const BYPASS_PATHS = [
  /^\/@vite/,         
  /^\/__vite_ping/,   
  /^\/node_modules\//,  
  /^\/src\//,           
  /^\/vite\//,         
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.method !== "GET") return;

  try {
    const url = new URL(req.url);

    if (url.origin !== self.location.origin) return;

    if (BYPASS_PATHS.some((re) => re.test(url.pathname))) {
      return; 
    }

    if (req.mode === 'navigate' || req.destination === 'document') {
      event.respondWith(
        fetch(req)
          .then((res) => {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put('/index.html', resClone));
            return res;
          })
          .catch(() =>
            caches.match('/index.html').then((cached) => cached || new Response('Offline', { status: 503 }))
          )
      );
      return;
    }

    event.respondWith(
      caches.match(req).then((cached) => {
        const fetchPromise = fetch(req)
          .then((networkRes) => {
            if (networkRes && networkRes.status === 200) {
              const clone = networkRes.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
            }
            return networkRes;
          })
          .catch(() => cached || new Response('Offline', { status: 503 }));

        return cached || fetchPromise;
      })
    );
  } catch {
    return;
  }
});
