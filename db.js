

const mongoose = require('mongoose');


const Usuario = mongoose.model('Usuario', new mongoose.Schema({
    nome: String,
    login: String,
    senha: String
}));

const Carro = mongoose.model('Carro', new mongoose.Schema({
    marca: String,
    modelo: String,
    ano: Number,
    qtde_disponivel: Number
}));



async function criarUsuario(dados) {
    return await Usuario.create(dados);
}

async function listarUsuarios() {
    return await Usuario.find();
}

async function atualizarUsuario(id, dados) {
    return await Usuario.findByIdAndUpdate(id, dados);
}

async function removerUsuario(id) {
    return await Usuario.findByIdAndDelete(id);
}




async function criarCarro(dados) {
    return await Carro.create(dados);
}

async function listarCarros() {
    return await Carro.find();
}

async function atualizarCarro(id, dados) {
    return await Carro.findByIdAndUpdate(id, dados);
}

async function removerCarro(id) {
    return await Carro.findByIdAndDelete(id);
}



module.exports = {
    criarUsuario,
    listarUsuarios,
    atualizarUsuario,
    removerUsuario,

    criarCarro,
    listarCarros,
    atualizarCarro,
    removerCarro
};

console.log("db.js carregado com sucesso!");
