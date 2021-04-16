const express = require('express');
const { MongoClient } = require('mongodb');
const { searchAndCasheWikiData } = require('./wiki.api.service');
const notesController = require('./notes.controller');

const app = express();
const port = 3000;
const connectionString =
	'mongodb+srv://DimaChumeiko:nxxTJG8mrZsQ1jbp@cluster0.vd6zd.mongodb.net/<dbname>?retryWrites=true&w=majority';

app.use(
	express.urlencoded({
		extended: true
	})
);

MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(client => {
	const db = client.db('notes_app');

	notesController(app, db);

	app.listen(port, () => {
		console.log(`Task3 app listening at http://localhost:${port}`);
	});
});

app.get('/search/:query', searchAndCasheWikiData);
