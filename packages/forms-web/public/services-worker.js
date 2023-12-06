self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-cache').then((cache) => {
            return cache.addAll([
                '/favicon.ico',
                '/logo192.png',
                '/manifest.json',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const requestUrl = new URL(request.url);

    function apiCache () {
        if (requestUrl.pathname.includes('/api/')) {
            event.respondWith(
                fetch(request).then((response) => {
                    const clonedResponse = response.clone();
                    caches.open('data-cache').then((cache) => {
                        cache.put(request, clonedResponse);
                    });
                    return response;
                }).catch(() => {
                    return caches.match(request);
                })
            );
        }
    }

    function useCaseCache () {
        if (requestUrl.pathname.includes('/form/')) {
            event.respondWith(
                fetch(request).then((response) => {
                    const clonedResponse = response.clone();
                    caches.open('data-cache').then((cache) => {
                        cache.put(request, clonedResponse);
                    });
                    return response;
                }).catch(() => {
                    return caches.match(request);
                })
            );
        }
    }

    function imageCache () {
        if (requestUrl.pathname.endsWith('.png')) {
            event.respondWith(
                caches.match(request).then((response) => {
                    if (response) {
                        return response;
                    }
                    return fetch(request).then((networkResponse) => {
                        const clonedResponse = networkResponse.clone();
                        caches.open('image-cache').then((cache) => {
                            cache.put(request, clonedResponse);
                        });
                        return networkResponse;
                    });
                })
            );
        }
    }

    function getCaches () {
        event.respondWith(
            caches.match(request).then((response) => {
                return response || fetch(request);
            })
        );
    }

    apiCache();
    imageCache();
    getCaches();
    useCaseCache();

});
