import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});
