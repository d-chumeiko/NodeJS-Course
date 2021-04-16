const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:postgres@localhost:5433/task5_db');

module.exports = db;
