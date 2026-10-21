self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.use('koshei-cache-v1').then((cache) => {
      return cache.addAll(['/Koshei_Shmot/', '/Koshei_Shmot/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
