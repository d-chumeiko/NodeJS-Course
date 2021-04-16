const Sequelize = require('sequelize');
const db = require('../config/db');

const Director = db.define('directors', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER
	},
	fullName: {
		allowNull: false,
		type: Sequelize.STRING
	},
	yearOfBirth: {
		allowNull: false,
		type: Sequelize.INTEGER
	}
});

module.exports = Director;
