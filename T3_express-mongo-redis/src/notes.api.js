const { ObjectID } = require('mongodb');

class Notes {
	constructor(notesCollection) {
		this.notesCollection = notesCollection;
	}

	getNotes(req, res) {
		this.notesCollection
			.find()
			.toArray()
			.then(results => {
				res.send(results);
			})
			.catch(error => console.error(error));
	}

	postNote(req, res) {
		this.notesCollection
			.insertOne(req.body)
			.then(() => {
				res.send(`Note with title: '${req.body.title}' and text: '${req.body.text}' was added!`);
			})
			.catch(error => console.error(error));
	}

	updateNote(req, res) {
		const id = req.params.id;

		this.notesCollection
			.updateOne({ _id: ObjectID(id) }, { $set: req.body })
			.then(() => {
				res.send(`Note with ID: '${id}' was updated`);
			})
			.catch(error => console.error(error));
	}

	deleteNote(req, res) {
		const id = req.params.id;
		this.notesCollection
			.deleteOne({ _id: ObjectID(id) })
			.then(() => {
				res.send(`Note with ID: '${id}' was removed`);
			})
			.catch(error => console.error(error));
	}
}

module.exports.Notes = Notes;
