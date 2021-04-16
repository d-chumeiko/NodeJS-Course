const Genre = require('../models/genre.model');
const { throwServerError, throwNotFoundError } = require('../errors/errors');

async function getGenres(req, res) {
	try {
		const genres = await Genre.findAll();
		res.status(200).json({ genres });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function addGenre(req, res) {
	try {
		const genre = await Genre.create({
			title: req.body.title
		});

		res.status(201).json({ genre });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function updateGenre(req, res) {
	try {
		const genre = await Genre.findByPk(+req.params.id);

		if (!genre) return throwNotFoundError(res);

		genre.title = req.body.title;

		await genre.save();
		res.status(200).json({ genre });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function deleteGenre(req, res) {
	try {
		const genre = await Genre.findByPk(+req.params.id);
		await genre.destroy();
		res.status(204).json({});
	} catch (e) {
		throwServerError(e, res);
	}
}

module.exports = {
	addGenre,
	getGenres,
	updateGenre,
	deleteGenre
};
