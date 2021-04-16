const { Router } = require('express');
const { addDocument, getDocuments, updateDocument, deleteDocument } = require('../services/document.services');
const router = Router();

router.get('/', getDocuments);

router.post('/', addDocument);

router.put('/:id', updateDocument);

router.delete('/:id', deleteDocument);

module.exports = router;
