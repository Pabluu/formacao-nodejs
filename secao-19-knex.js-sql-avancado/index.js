const database = require("./database");

// INSERT
/*
let dados = [
  { nome: "Sea of Thieves", preco: 50.97 },
  { nome: "Call Of Duty", preco: 50 },
  { nome: "Rocket League", preco: 0 },
  { nome: "Call of Duty 2", preco: 86.8 },
  { nome: "GTA V", preco: 105.99 },
  { nome: "The Witcher", preco: 16.9 },
];

database
  .insert(dados)
  .into("games")

  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  */

// SELECT
/* 
  database.select(["nome", "preco"])
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
*/

//NESTED QUERIES
/* database.insert({ nome: "Mists of noyah", preco: 25 })
  .into("games")
  .then((data) => {
    database
      .select(["nome", "preco"])
      .table("games")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
*/

//WHERE
/*database
  .select()
  .whereRaw("preco > 50")
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
*/

// DELETE
/*database
  .where({ id: 3 })
  .delete()
  .table("games")
  .then((data) => console.log(data));
*/

// UPDATE
/*database
  .where({ nome: "GTA V" })
  .update({ preco: 105 })
  .table("games")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.dir(error);
  });
*/

// ORDER BY
/*database
  .select()
  .table("games")
  .orderBy("preco", "desc")
  .then((data) => {
    console.log(data);
  });
*/

// INSERTS ASSOCIADOS
/*database
  .insert({
    nome: "Rockstar Games",
    game_id: 5,
  })
  .table("estudios")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// RELACIONAMENTO 1:1
/*database
  .select(["games.*", "estudios.*"])
  .table("games")
  .innerJoin("estudios", "estudios.game_id", "games.id")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
*/

// JOIN COM WHERE
/*database
  .select(["games.*", "estudios.*"])
  .table("games")
  .innerJoin("estudios", "estudios.game_id", "games.id")
  .where("games.id", 5)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
  */

// RELACIONAMENTO 1:M
/*database
  .select(["games.*", "estudios.*"])
  .table("games")
  .innerJoin("estudios", "estudios.game_id", "games.id")
  .where("games.id", 9)
  .then((data) => {
    let estudiosGameArray = data;
    let game = {
      id: 0,
      nome: "",
      estudios: [],
    };

    game.id = data[0].id;
    game.nome = data[0].nome;

    data.forEach((estudio) => {
      game.estudios.push({ nome: estudio.nome });
    });
    console.log(game);
  })
  .catch((error) => {
    console.log(error);
  });
*/

// RELACIONAMENTO MANY TO MANY
/*database
  .select(["games.nome as game_nome", "estudios.nome as estudio_nome"])
  .table("games_estudios")
  .innerJoin("games", "games.id", "games_estudios.game_id")
  .innerJoin("estudios", "estudios.id", "games_estudios.estudio_id")
  .where("games.id", 5)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
*/

// TRANSACTIONS
/*async function testeTransacao() {
  try {
    await database.transaction(async (trans) => {
      await database.insert({ nome: "dsfsdf" }).table("estudios");
      await database.insert({ nome: "sdfsdfsdfsf" }).table("estudio");
      await database.insert({ nome: "Mojang" }).table("estudios");
      await database.insert({ nome: "Gearbox" }).table("estudios");

      console.log("OK: Inserts");
    });
  } catch (err) {
    console.log(err);
  }
}

testeTransacao();
*/
