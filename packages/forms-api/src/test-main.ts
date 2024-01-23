import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde forms Johhny!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
