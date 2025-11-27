

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const db = require('./db'); 
const app = express();




app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname)));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




mongoose.connect('mongodb://localhost:27017/loja_carros')
    .then(() => console.log("MongoDB conectado!"))
    .catch(err => console.log("Erro ao conectar no MongoDB:", err));





app.get('/', (req, res) => {
    res.redirect('/projects.html');
});





app.get('/carros', async (req, res) => {
    const carros = await db.listarCarros();   
    res.render('carros', { carros });
});


app.get('/gerenciar', async (req, res) => {
    const carros = await db.listarCarros();   
    res.render('gerenciar_carros', { carros });
});



app.post('/carros/novo', async (req, res) => {
    await db.criarCarro({
        marca: req.body.marca,
        modelo: req.body.modelo,
        ano: req.body.ano,
        qtde_disponivel: req.body.qtde_disponivel
    });
    res.redirect('/gerenciar');
});


app.post('/carros/atualizar', async (req, res) => {
    await db.atualizarCarro(req.body.id, {
        modelo: req.body.modelo,
        ano: req.body.ano,
        qtde_disponivel: req.body.qtde_disponivel
    });
    res.redirect('/gerenciar');
});


app.post('/carros/remover', async (req, res) => {
    await db.removerCarro(req.body.id);
    res.redirect('/gerenciar');
});



app.listen(80, () => {
    console.log('Servidor rodando na porta 80...');
});
