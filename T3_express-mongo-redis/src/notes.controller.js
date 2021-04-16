const { body, validationResult } = require('express-validator');
const { Notes } = require('./notes.api');

module.exports = (app, db) => {
	const notesCollection = db.collection('notes');
	const notes = new Notes(notesCollection);

	app
		.route('/notes')
		.get((req, res) => {
			return notes.getNotes(req, res);
		})
		.post(
			[
				body('title')
					.isLength({ min: 5, max: 40 })
					.notEmpty(),
				body('text')
					.isLength({ min: 5, max: 100 })
					.notEmpty()
			],
			(req, res) => {
				const errors = validationResult(req);

				if (!errors.isEmpty()) {
					return res.status(400).json({ errors: errors.array() });
				}

				notes.postNote(req, res);
			}
		);
	app
		.route('/notes/:id')
		.put(
			[
				body('title')
					.isLength({ min: 5, max: 40 })
					.notEmpty(),
				body('text')
					.isLength({ min: 5, max: 100 })
					.notEmpty()
			],
			(req, res) => {
				const errors = validationResult(req);

				if (!errors.isEmpty()) {
					return res.status(400).json({ errors: errors.array() });
				}

				notes.updateNote(req, res);
			}
		)
		.delete((req, res) => {
			return notes.deleteNote(req, res);
		});
};
