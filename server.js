const express = require("express");
const path = require("path");
const app = express();


app.use(express.static(path.join(__dirname)));


app.listen(80, () => {
    console.log("Servidor rodando na porta 80...");
    console.log("Acesse usando o IP da máquina + nome da página.");
});
