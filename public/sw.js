// sw.js
const CACHE_NAME = 'my-pwa-cache-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-144x144.png'

  
];



const BYPASS_PATHS = [
  /^\/@vite/,
  /^\/__vite_ping/,
  /^\/node_modules\//,
  /^\/src\//,
  /^\/vite\//,
  /^\/manifest\.webmanifest$/, 
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((names) =>
        Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
      ),
      ('navigationPreload' in self.registration)
        ? self.registration.navigationPreload.enable()
        : Promise.resolve(),
    ])
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  if (req.method !== 'GET') return;

  try {
    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;

    if (
      BYPASS_PATHS.some((re) => re.test(url.pathname)) ||
      req.headers.get('range') ||                        
      req.cache === 'no-store'                           
    ) {
      return; 
    }

    if (req.mode === 'navigate' || req.destination === 'document') {
      event.respondWith(
        (async () => {
          try {
            const preload = await event.preloadResponse;
            const netRes = preload || (await fetch(req));
            if (netRes && netRes.status === 200 && netRes.type === 'basic') {
              const clone = netRes.clone();
              caches.open(CACHE_NAME).then((c) => c.put('/index.html', clone));
            }
            return netRes;
          } catch {
            const cached = await caches.match('/index.html');
            return cached || new Response('Offline', { status: 503 });
          }
        })()
      );
      return;
    }

    event.respondWith(
      (async () => {
        const cached = await caches.match(req);
        if (cached) {
          fetch(req).then((netRes) => {
            if (netRes && netRes.status === 200 && netRes.type === 'basic') {
              caches.open(CACHE_NAME).then((c) => c.put(req, netRes.clone()));
            }
          }).catch(() => {});
          return cached;
        }
        try {
          const netRes = await fetch(req);
          if (netRes && netRes.status === 200 && netRes.type === 'basic') {
            const clone = netRes.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          }
          return netRes;
        } catch {
          return new Response('Offline', { status: 503 });
        }
      })()
    );
  } catch {
    return;
  }
});
