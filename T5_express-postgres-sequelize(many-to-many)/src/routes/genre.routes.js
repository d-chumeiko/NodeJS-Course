const { Router } = require('express');
const { addGenre, getGenres, updateGenre, deleteGenre } = require('../services/genre.services');
const router = Router();

router.get('/', getGenres);

router.post('/', addGenre);

router.put('/:id', updateGenre);

router.delete('/:id', deleteGenre);

module.exports = router;
