const CACHE_NAME = 'tiptop-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Style.css',
  '/Proceso.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/Fondo.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
