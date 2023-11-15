var CACHE_NAME = 'pwa-camera-test-caches';
var urlsToCache = [
    '/pwa-camera-test/index.html',
     '/pwa-camera-test/js/camera.js'
    ];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response || fetch(event.request);
            })
    );
});
