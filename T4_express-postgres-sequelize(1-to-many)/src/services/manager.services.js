const Manager = require('../models/manager.model');
const { throwServerError, throwNotFoundError } = require('../errors/errors');

async function getManagers(req, res) {
	try {
		const managers = await Manager.findAll();
		res.status(200).json({ managers });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function addManager(req, res) {
	try {
		const manager = await Manager.create({
			fullName: req.body.fullName
		});
		res.status(201).json({ manager });
	} catch (e) {
		throwServerError(e, res);
	}
}
async function updateManager(req, res) {
	try {
		const manager = await Manager.findByPk(+req.params.id);

		if (!manager) return throwNotFoundError(res);

		manager.fullName = req.body.fullName;
		await manager.save();
		res.status(200).json({ manager });
	} catch (e) {
		throwNotFoundError(res);
	}
}
async function deleteManager(req, res) {
	try {
		const manager = await Manager.findByPk(+req.params.id);
		await manager.destroy();
		res.status(204).json({});
	} catch (e) {
		throwServerError(e, res);
	}
}

module.exports = {
	addManager,
	getManagers,
	updateManager,
	deleteManager
};
