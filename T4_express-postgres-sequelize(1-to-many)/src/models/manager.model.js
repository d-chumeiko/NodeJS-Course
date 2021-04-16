const Sequelize = require('sequelize');
const db = require('../config/db');

const Manager = db.define('managers', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER
	},
	fullName: {
		allowNull: false,
		type: Sequelize.STRING
	}
});

module.exports = Manager;
