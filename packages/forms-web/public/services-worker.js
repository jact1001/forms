self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('offline-cache').then((cache) => {
            return cache.addAll([
                '/favicon.ico',
                '/logo192.png',
                '/manifest.json',
                'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap',
                'https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2',
                '/user-forms'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    const requestUrl = new URL(request.url);

    function apiCache () {
        if ( navigator.onLine && (requestUrl.pathname.includes('/api/') || requestUrl.pathname.includes('/form/') || requestUrl.pathname.includes('/form-design/')) && request.method === 'GET') {
            event.respondWith(
                fetch(request).then((response) => {
                    const clonedResponse = response.clone();
                    caches.open('offline-cache').then((cache) => {
                        cache.put(request, clonedResponse);
                    });
                    return response;
                }).catch(() => {
                    return caches.match(request);
                })
            );
        }
    }

    function getCaches() {
        if (!navigator.onLine) {
            event.respondWith(
                caches.match(request).then((response) => {
                    if (response) {
                        return response;
                    }
                })
            );
        }
    }

    apiCache();
    getCaches();

});
