const express = require('express');
const bodyParser = require('body-parser');

const dbContext = require('../database/models');
const rootRouter = require('./routes');

const logger = require('../logger/logger');

const PORT = 3000;

function createExpressServer() {
	const app = express();

	app.use((req, res, done) => {
		logger.info({
			message: `EXPRESS
      Request headers: ${JSON.stringify(req.headers)},
      Request hostname: ${req.hostname},
      Request path: ${req.path}`
		});
		done();
	});

	app.use(bodyParser.json());

	app.use((req, res, next) => {
		req.dbContext = dbContext;
		next();
	});

	app.use((req, res, next) => {
		console.log(`Express time: ${Date.now()}`);
		next();
	});

	app.use('/', rootRouter);

	app.use((err, req, res, next) => {
		console.error(err);
		next(err);
	});

	app.listen(PORT, () => console.log(`Express server running on http://localhost:${PORT}`));
}

module.exports = createExpressServer;
