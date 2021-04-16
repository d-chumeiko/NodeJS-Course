const { Router } = require('express');
const { addManager, getManagers, updateManager, deleteManager } = require('../services/manager.services');
const router = Router();

router.get('/', getManagers);

router.post('/', addManager);

router.put('/:id', updateManager);

router.delete('/:id', deleteManager);

module.exports = router;
