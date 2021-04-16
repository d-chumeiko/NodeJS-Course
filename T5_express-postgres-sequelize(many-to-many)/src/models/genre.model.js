const Sequelize = require('sequelize');
const db = require('../config/db');

const Genre = db.define('genres', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER
	},
	title: {
		allowNull: false,
		type: Sequelize.STRING
	}
});

module.exports = Genre;
