const movieGenreModel = require('../models/movie-genres.model');
const genreModel = require('../models/genre.model');
const movieModel = require('../models/movie.model');
const { throwServerError, throwNotFoundError } = require('../errors/errors');

async function addGenreToMovie(req, res) {
	try {
		const { filmName, filmGenre } = req.body;

		const movie = await movieModel.findOne({ where: { name: filmName } });
		const genre = await genreModel.findOne({ where: { title: filmGenre } });

		if (!movie || !genre) {
			return throwNotFoundError(res);
		}

		await movie.addGenre(genre);
		res.status(200).json('Genre was added');
	} catch (e) {
		throwServerError(e, res);
	}
}

module.exports = {
	addGenreToMovie
};
