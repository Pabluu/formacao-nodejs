require("dotenv").config();
const { PORT, USER, PASSWORD, DATABASE } = process.env;

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
  },
});

module.exports = knex;
