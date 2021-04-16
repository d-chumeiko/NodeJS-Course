const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const documentRoutes = require('./routes/document.routes');
const managerRoutes = require('./routes/manager.routes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/documents', documentRoutes);
app.use('/api/managers', managerRoutes);

async function start() {
	try {
		await db.sync();
		app.listen(port, () => {
			console.log(`Task4 app listening at http://localhost:${port}`);
		});
	} catch (e) {
		console.log(e);
	}
}

start();
