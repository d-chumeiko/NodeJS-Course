const Document = require('../models/document.model');
const { throwServerError, throwNotFoundError } = require('../errors/errors');

async function getDocuments(req, res) {
	try {
		const documents = await Document.findAll();
		res.status(200).json({ documents });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function addDocument(req, res) {
	try {
		let managerId = +req.body.managerId;
		if (!managerId) managerId = null;

		const document = await Document.create({
			managerId,
			content: req.body.content
		});
		res.status(201).json({ document });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function updateDocument(req, res) {
	try {
		const document = await Document.findByPk(+req.params.id);

		if (!document) return throwNotFoundError(res);

		let managerId = +req.body.managerId;
		if (managerId) document.managerId = managerId;

		document.content = req.body.content;

		await document.save();
		res.status(200).json({ document });
	} catch (e) {
		throwServerError(e, res);
	}
}

async function deleteDocument(req, res) {
	try {
		const document = await Document.findByPk(+req.params.id);
		await document.destroy();
		res.status(204).json({});
	} catch (e) {
		throwServerError(e, res);
	}
}

module.exports = {
	addDocument,
	getDocuments,
	updateDocument,
	deleteDocument
};
