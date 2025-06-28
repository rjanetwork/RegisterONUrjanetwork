self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('erkafiber-cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/Untitled-1.html',
        '/manifest.json',
        'https://erkafiber.id/img/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
