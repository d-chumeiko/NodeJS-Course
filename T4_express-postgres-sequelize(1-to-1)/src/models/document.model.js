const Sequelize = require('sequelize');
const Manager = require('./manager.model');
const db = require('../config/db');

const Document = db.define('documents', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: Sequelize.INTEGER
	},
	managerId: {
		type: Sequelize.INTEGER,
		allowNull: true
	},
	content: {
		allowNull: false,
		type: Sequelize.STRING
	}
});

Document.belongsTo(Manager);

module.exports = Document;
