const CACHE_NAME = 'pwa-demo-app-v1';

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

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(appShellFiles);
        })
    );
});

self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    if (requestUrl.protocol.startsWith('http')) {
        event.respondWith(
            (async () => {
                try {
                    // First try to match in all caches
                    const cachedResponse = await caches.match(event.request);
                    if (cachedResponse) {
                        return cachedResponse;
                    }

                    // If not in cache, fetch from network
                    const networkResponse = await fetch(event.request);
                    if (networkResponse.ok && event.request.method === 'GET') {
                        const cache = await caches.open(CACHE_NAME);
                        cache.put(event.request, networkResponse.clone());
                    }
                    return networkResponse;
                } catch (error) {
                    return fetch(event.request);
                }
            })()
        );
    }
});
