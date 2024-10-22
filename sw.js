// On install, cache the application shell
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-cache').then(function(cache) {
            // Cache any static files that make up the application shell
            return cache.add('index.html');
        })
    );
});

// on network request
self.addEventListener('fetch', function(event) {
    event.respondWith(
        // try cache first
        caches.match(event.request).then(function(response) {
            // If the request is in the cache, return the cached version
            if (response) {
                return response;
            }
            // Otherwise, fetch the request from the network
            return fetch(event.request);
        })
    );
});