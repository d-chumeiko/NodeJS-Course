const Genre = require('./genre.model');
const Movie = require('./movie.model');

const db = require('../config/db');

const movieGenres = db.define('movieGenres', {});

Movie.belongsToMany(Genre, { through: movieGenres });
Genre.belongsToMany(Movie, { through: movieGenres });

module.exports = movieGenres;
