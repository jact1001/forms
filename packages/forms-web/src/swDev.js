const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/services-worker.js`
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(swUrl).then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        if (navigator.onLine) {
          navigator.serviceWorker.controller.postMessage({ command: 'online' });
        } else {
          navigator.serviceWorker.controller.postMessage({ command: 'offline' });
        }
      }, (error) => {
        console.log('ServiceWorker registration failed: ', error);
      });
    });

    window.addEventListener('online', function() {
      console.log('La conexión está online');
      navigator.serviceWorker.controller.postMessage({ command: 'online' });
    });

    window.addEventListener('offline', function() {
      console.log('La conexión está offline');
      navigator.serviceWorker.controller.postMessage({ command: 'offline' });
    });

  }
};

export default swDev;
