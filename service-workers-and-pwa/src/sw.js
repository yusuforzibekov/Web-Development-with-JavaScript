const appShellFiles = [
    'index.html',
    'app.js',
    'images/astronaut-crop1.jpg',
    'images/astronaut-crop2.jpg',
    'images/astronaut.jpg',
    'styles/style.css',
    'styles/mobile.css',
    'icons/favicon.ico',
    'icons/icon-32.png',
    'icons/icon-64.png',
    'icons/icon-96.png',
    'icons/icon-128.png',
    'icons/icon-167.png',
    'icons/icon-192.png',
    'icons/icon-256.png',
    'icons/icon-512.png',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('pwa-demo-app-v1').then(cache => {
            return cache.addAll(appShellFiles);
        })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.url.startsWith('http:') || event.request.url.startsWith('https:')) {
        event.respondWith(
            caches.match(event.request).then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request).then(response => {
                    return caches.open('pwa-demo-app-v1').then(cache => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                });
            })
        );
    }
});