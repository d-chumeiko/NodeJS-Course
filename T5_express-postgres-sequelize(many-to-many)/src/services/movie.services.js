const Movie = require('../models/movie.model');
const { throwServerError, throwNotFoundError } = require('../errors/errors');

// +
async function getMovies(req, res) {
	try {
		const movies = await Movie.findAll();
		res.status(200).json({ movies });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function addMovie(req, res) {
	try {
		let directorId = +req.body.directorId;
		let genreId = +req.body.genreId;

		const movie = await Movie.create({
			directorId,
			genreId,
			name: req.body.name
		});

		res.status(201).json({ movie });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function updateMovie(req, res) {
	try {
		const movie = await Movie.findByPk(+req.params.id);

		if (!movie) return throwNotFoundError(res);

		movie.directorId = +req.body.directorId;
		movie.name = req.body.name;

		await movie.save();
		res.status(200).json({ movie });
	} catch (e) {
		throwNotFoundError(res);
	}
}

async function deleteMovie(req, res) {
	try {
		const movie = await Movie.findByPk(+req.params.id);
		await movie.destroy();

		res.status(204).json({});
	} catch (e) {
		throwServerError(e, res);
	}
}

module.exports = {
	addMovie,
	getMovies,
	updateMovie,
	deleteMovie
};
