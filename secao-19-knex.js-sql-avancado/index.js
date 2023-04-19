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
