const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

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
};

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

app.get("/", (req, res) => {
  res.redirect("/games/");
});

app.listen(3000, () => {
  console.log("Servidor Rodando: http://localhost:3000");
});
