import express from 'express';
import cursoRouter from './src/route/curso.routes.js';

const app = express();

app.use(express.json());
app.use(cursoRouter);

app.listen(3000, () => {
    console.log('Servidor ligado na porta 3000.');
});
