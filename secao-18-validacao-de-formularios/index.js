const bodyParser = require("body-parser");
const express = require("express");
const flash = require("express-flash");
const app = express();
const session = require("express-session");

// variaveis de ambiente
require("dotenv").config();
const PORT = process.env.PORT;

app.set("view engine", "ejs");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express-session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(flash());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/form", (req, res) => {
  let { email, nome, pontos } = req.body;
  let emailError, pontosError, nomeError;

  if (email == undefined || email == "") {
    emailError = "O email não pode ser vazio";
  }

  if (pontos == undefined || pontos < 20) {
    pontosError = "Você não pode ter menos de 20 pontos";
  }

  if (nome == undefined || nome == "") {
    nomeError = "O nome não pode ser vazio";
  }

  if (nome < 4) {
    nomeError = "O nome é mt pequeno";
  }

  if (
    emailError != undefined ||
    pontosError != undefined ||
    nomeError != undefined
  ) {
    res.redirect("/");
  } else {
    res.send("SHOW DE BOLA");
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
