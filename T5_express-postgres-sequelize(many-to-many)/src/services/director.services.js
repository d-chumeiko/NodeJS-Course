const Director = require('../models/director.model');
const { throwServerError, throwNotFoundError } = require('../errors/errors');

async function getDirectors(req, res) {
	try {
		const directors = await Director.findAll();
		res.status(200).json({ directors });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function addDirector(req, res) {
	try {
		const director = await Director.create({
			fullName: req.body.fullName,
			yearOfBirth: req.body.yearOfBirth
		});

		res.status(201).json({ director });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function updateDirector(req, res) {
	try {
		const director = await Director.findByPk(+req.params.id);

		if (!director) return throwNotFoundError(res);

		director.fullName = req.body.fullName;
		director.yearOfBirth = req.body.yearOfBirth;

		await director.save();
		res.status(200).json({ director });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function deleteDirector(req, res) {
	try {
		const director = await Director.findByPk(+req.params.id);
		await director.destroy();
		res.status(204).json({});
	} catch (e) {
		throwServerError(e, res);
	}
}

module.exports = {
	addDirector,
	getDirectors,
	updateDirector,
	deleteDirector
};
