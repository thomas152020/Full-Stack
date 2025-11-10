const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const users = []; 


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "public")));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "projects.html"));
});


app.get("/cadastra", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Cadastro.html"));
});


app.post("/cadastra", (req, res) => {
    const { usuario, senha } = req.body;
    users.push({ usuario, senha });
    res.render("resposta", { status: "Usuário cadastrado com sucesso!" });
});


app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Login.html"));
});


app.post("/login", (req, res) => {
    const { usuario, senha } = req.body;
    const user = users.find(u => u.usuario === usuario && u.senha === senha);
    
    if (user) {
        res.render("resposta", { status: "Login efetuado com sucesso!" });
    } else {
        res.render("resposta", { status: "Falha no login. Usuário ou senha incorretos." });
    }
});


app.listen(80, () => {
    console.log("Servidor rodando na porta 80...");
    console.log("Acesse http://localhost/ ou o IP da máquina na rede.");
});

