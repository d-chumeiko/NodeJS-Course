const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:postgres@localhost:5433/task4_db');

module.exports = db;
