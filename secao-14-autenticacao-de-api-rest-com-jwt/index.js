const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const env = process.env;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

let DB = {
  games: [
    {
      id: 11,
      title: "Call of duty MW",
      year: 2019,
      price: 60,
    },

    {
      id: 22,
      title: "Sea of Thieves",
      year: 2018,
      price: 40,
    },

    {
      id: 33,
      title: "Minecraft",
      year: 2012,
      price: 20,
    },
  ],
  users: [
    {
      id: 1,
      nome: "Pablo Henrique",
      email: "pablo@email",
      password: "JS<3",
    },
    {
      id: 2,
      nome: "Guilherme Silva",
      email: "gui@email",
      password: "node<3",
    },
  ],
};

app.post("/auth", (req, res) => {
  let { email, password } = req.body;

  // inseriu um email
  if (email != undefined) {
    let user = DB.users.find((u) => u.email === email);

    // usuário(email) existe na BD
    if (user != undefined) {
      // autenticando usuario
      if (user.password === password) {
        res.status(200);
        res.json({ token: "TOKEN FALSO" });
      } else {
        // senha invalida
        res.status(401);
        res.json({ err: "Credencial inválida" });
      }
    } else {
      // usuário não existe
      res.status(404);
      res.json({ err: "Email não existe na base de dados!!" });
    }
  } else {
    // não inseriu um email
    res.status(400);
    res.json({ err: "Insira um email inválido!!" });
  }
});

// Listar todos os game
app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});

// Listar um game pelo ID
app.get("/game/:id", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    let game = DB.games.find((g) => g.id === id);

    if (game !== undefined) {
      res.statusCode = 200;
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  }
});

// Cadastrar GAME
app.post("/game", (req, res) => {
  let { title, price, year } = req.body;

  DB.games.push({
    id: 44,
    title,
    price,
    year,
  });

  res.sendStatus(200);
});

// Deletar um game pelo ID
app.delete("/game/:id", (req, res) => {
  let id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    let gameIndex = DB.games.findIndex((g) => g.id === id);

    if (gameIndex === -1) {
      res.sendStatus(404);
    } else {
      DB.games.splice(gameIndex, 1);
      res.sendStatus(200);
    }
  }
});

// Editar um game específico pelo ID
app.put("/game/:id", (req, res) => {
  let id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.sendStatus(400);
  } else {
    let game = DB.games.find((g) => g.id === id);

    if (game !== undefined) {
      let { title, price, year } = req.body;

      if (title !== undefined) {
        game.title = title;
      }

      if (price !== undefined) {
        game.price = price;
      }

      if (year !== undefined) {
        game.year = year;
      }
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
});

// app.get("/", (req, res) => {
//   res.redirect("/games/");
// });

app.listen(env.PORT, () => {
  console.log("Servidor Rodando: http://localhost:3001");
});
