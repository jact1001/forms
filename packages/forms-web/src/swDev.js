const swDev = () => {
  let swUrl = `${process.env.PUBLIC_URL}/services-worker.js`
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(swUrl).then((response) => {
      console.log('Si responde', response);
    })
  }
};

export default swDev;
