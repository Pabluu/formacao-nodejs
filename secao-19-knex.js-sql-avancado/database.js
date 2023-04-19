require("dotenv").config();

const { PORTDB, USERDB, PASSDB, DATABASE } = process.env;

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: PORTDB,
    user: USERDB,
    password: PASSDB,
    database: DATABASE,
  },
});

module.exports = knex;
