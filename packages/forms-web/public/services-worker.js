self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-cache').then((cache) => {
            return cache.addAll([
                '/api/user-forms',
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

    // Handle JSON responses
    if (requestUrl.pathname === '/api/user-formsss') {
        event.respondWith(
            fetch(request).then((response) => {
                // Clone the response to cache it
                const clonedResponse = response.clone();

                // Cache the response
                caches.open('data-cache').then((cache) => {
                    cache.put(request, clonedResponse);
                });

                return response;
            }).catch(() => {
                // If the network request fails, try to retrieve the response from cache
                return caches.match(request);
            })
        );
        return;
    }

    // Handle PNG files
    if (requestUrl.pathname.endsWith('.png')) {
        event.respondWith(
            caches.match(request).then((response) => {
                // If the PNG file is found in cache, return it
                if (response) {
                    return response;
                }

                // If the PNG file is not found in cache, fetch it from the network
                return fetch(request).then((networkResponse) => {
                    // Clone the response to cache it
                    const clonedResponse = networkResponse.clone();

                    // Cache the response
                    caches.open('image-cache').then((cache) => {
                        cache.put(request, clonedResponse);
                    });

                    return networkResponse;
                });
            })
        );
        return;
    }

    // For all other requests, use the default fetch behavior
    event.respondWith(
        caches.match(request).then((response) => {
            return response || fetch(request);
        })
    );
});
