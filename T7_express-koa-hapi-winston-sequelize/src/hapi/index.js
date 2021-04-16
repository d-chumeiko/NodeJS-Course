const Hapi = require('@hapi/hapi');

const router = require('./routes');
const authMiddleware = require('./middlewares/auth-middleware');
const logger = require('../logger/logger');

const PORT = 3001;

async function createHapiServer() {
	const server = Hapi.Server({
		port: PORT
	});

	await server.register(require('hapi-auth-jwt2'));

	server.auth.strategy('jwt', 'jwt', {
		key: process.env.JWT_SECRET_KEY,
		validate: authMiddleware
	});

	server.route(router);

	server.ext('onRequest', (req, h) => {
		logger.info({
			message: `HAPI
      Request headers: ${JSON.stringify(req.headers)},
      Request path: ${req.path}`
		});

		console.log(`Hapi time: ${Date.now()}`);
		return h.continue;
	});

	server
		.start()
		.then(() => console.log(`Hapi server running on http://localhost:${PORT}`))
		.catch((err) => console.error(err));
}

process.on('unhandledRejection', (err) => {
	console.error(err);
	process.exit(1);
});

module.exports = createHapiServer;
