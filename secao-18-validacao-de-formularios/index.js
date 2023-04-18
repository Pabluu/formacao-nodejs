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

// app.use(flash());

app.get("/", (req, res) => {
  console.log("Está rodando....");
  res.send("Rodando...");
});

app.listen(PORT, (req, res) => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
