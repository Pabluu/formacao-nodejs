const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'pablo', '2107ph', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;