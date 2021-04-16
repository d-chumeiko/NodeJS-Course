const { Router } = require('express');
const { addGenreToMovie } = require('../services/movie-genres.services');
const router = Router();

router.post('/', addGenreToMovie);

module.exports = router;
