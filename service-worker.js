self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('blog-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/path/to/icon-192x192.png',
        '/path/to/icon-512x512.png',
        '/styles.css',
        '/scripts.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
