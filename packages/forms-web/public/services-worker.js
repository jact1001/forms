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

self.addEventListener('message', function(event) {

    function sendSaveData() {
        return caches.open('save-cache').then((cache) => {
            return cache.keys().then((keys) => {
                return Promise.all(
                    keys.map((key) => {
                        return cache.match(key).then((response) => {
                            if (response) {
                                return fetch('http://localhost:8080/api/use-case', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: response.body,
                                }).then(() => {
                                    return cache.delete(key);
                                });
                            }
                        });
                    })
                );
            });
        });
    }

    if (event.data && event.data.command === 'online') {
        // Manejar eventos cuando la conexión está online
        console.log('Service Worker: La conexión está online');
        sendSaveData();
    } else if (event.data && event.data.command === 'offline') {
        // Manejar eventos cuando la conexión está offline
        console.log('Service Worker: La conexión está offline');
    }
});

self.addEventListener('fetch', (event) => {
    console.log('ejecutando fetch...');
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

    function useCaseSaveCache () {
        console.log('Request: ', requestUrl);
        if (requestUrl.pathname.includes('/use-case')) {
            console.log('guardando info de caso...')
            event.waitUntil(
                caches.open('save-cache').then((cache) => {
                    return cache;
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
        if (!navigator.onLine) {
            console.log('estamos trayendo data de cache');
            event.respondWith(
                caches.match(request).then((response) => {
                    return response || fetch(request);
                })
            );
        }
    }

    apiCache();
    imageCache();
    useCaseCache();
    useCaseSaveCache();
    getCaches();

});
