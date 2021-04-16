const { Router } = require('express');
const { addMovie, getMovies, updateMovie, deleteMovie } = require('../services/movie.services');
const router = Router();

router.get('/', getMovies);

router.post('/', addMovie);

router.put('/:id', updateMovie);

router.delete('/:id', deleteMovie);

module.exports = router;
