const bodyParser = require("body-parser");
const express = require("express");
const flash = require("express-flash");
const app = express();
const session = require("express-session");
const cookie = require("cookie-parser");
const cookieParser = require("cookie-parser");

// variaveis de ambiente
require("dotenv").config();
const PORT = process.env.PORT;

app.set("view engine", "ejs");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser("kasjdiw"));

// express-session
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

app.use(flash());

app.get("/", (req, res) => {
  let emailError = req.flash("emailError");
  let pontosError = req.flash("pontosError");
  let nomeError = req.flash("nomeError");

  let email = req.flash("email");
  let nome = req.flash("nome");
  let pontos = req.flash("pontos");
  res.render("index", {
    emailError,
    pontosError,
    nomeError,
    email,
    nome,
    pontos,
  });
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
    req.flash("emailError", emailError);
    req.flash("pontosError", pontosError);
    req.flash("nomeError", nomeError);

    req.flash("email", email);
    req.flash("nome", nome);
    req.flash("pontos", pontos);

    res.redirect("/");
  } else {
    res.send("SHOW DE BOLA");
  }
});

app.listen(PORT, (req, res) => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
