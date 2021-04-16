const Sequelize = require('sequelize');
const db = require('../config/db');
const Director = require('./director.model');
const Genre = require('./genre.model');

const Movie = db.define('movies', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER
	},
	directorId: {
		allowNull: false,
		type: Sequelize.INTEGER
	},
	name: {
		allowNull: false,
		type: Sequelize.STRING
	}
});

Movie.belongsTo(Director);

module.exports = Movie;
