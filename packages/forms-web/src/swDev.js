const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/services-worker.js`


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(swUrl).then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (error) => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}
};

export default swDev;
