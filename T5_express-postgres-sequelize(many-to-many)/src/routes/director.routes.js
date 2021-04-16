const { Router } = require('express');
const { addDirector, getDirectors, updateDirector, deleteDirector } = require('../services/director.services');
const router = Router();

router.get('/', getDirectors);

router.post('/', addDirector);

router.put('/:id', updateDirector);

router.delete('/:id', deleteDirector);

module.exports = router;
