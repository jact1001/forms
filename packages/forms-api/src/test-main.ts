import express from 'express';

const app = express();
const port = 8080;
const host = '0.0.0.0';
app.get('/', (req, res) => {
    res.send('¡Hola Mundo desde forms Johhny!');
});

app.listen(port, host,() => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
