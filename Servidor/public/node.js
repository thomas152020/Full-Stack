const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const users = [];


const db = new sqlite3.Database("blog.db");


db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        resumo TEXT,
        conteudo TEXT
    )`);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); 
app.set("view engine", "ejs");
app.set("views", __dirname); 


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "projects.html"));
});


app.get("/cadastra", (req, res) => {
    res.sendFile(path.join(__dirname, "cadastrar_post.html"));
});

app.post("/cadastra", (req, res) => {
    const { usuario, senha } = req.body;
    users.push({ usuario, senha });
    res.render("lab9.ejs", { status: "Usuário cadastrado com sucesso!" });
});


app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "Login.html"));
});

app.post("/login", (req, res) => {
    const { usuario, senha } = req.body;
    const user = users.find(u => u.usuario === usuario && u.senha === senha);
    if (user) {
        res.render("lab9.ejs", { status: "Login efetuado com sucesso!" });
    } else {
        res.render("lab9.ejs", { status: "Falha no login. Usuário ou senha incorretos." });
    }
});


app.get("/blog", (req, res) => {
    db.all("SELECT * FROM posts", (err, rows) => {
        if (err) throw err;
        res.render("blog.ejs", { posts: rows });
    });
});


app.get("/cadastrar_post", (req, res) => {
    res.sendFile(path.join(__dirname, "cadastrar_post.html"));
});

app.post("/cadastrar", (req, res) => {
    const { titulo, resumo, conteudo } = req.body;
    db.run("INSERT INTO posts (titulo, resumo, conteudo) VALUES (?, ?, ?)",
        [titulo, resumo, conteudo],
        err => {
            if (err) throw err;
            res.redirect("/blog");
        }
    );
});


app.listen(80, () => {
    console.log(" Servidor rodando na porta 80...");
    console.log(" Acesse: http://localhost/");
});

