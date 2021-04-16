const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const koaValidator = require('koa-async-validator');
const logger = require('../logger/logger');

const dbContext = require('../database/models');

const router = require('./routes');

const PORT = 3002;

function createKoaServer() {
	const app = new Koa();

	app.use(bodyParser());
	app.use(koaValidator());

	app.use(async (ctx, next) => {
		try {
			await next();
		} catch (err) {
			ctx.status = err.status || 500;
			ctx.body = err.message;
			ctx.app.emit('error', err, ctx);
		}
	});

	app.use(async (ctx, next) => {
		ctx.dbContext = dbContext;
		await next();
	});

	app.use(async (ctx, next) => {
		logger.info({
			message: `KOA
      Request headers: ${JSON.stringify(ctx.request.headers)},
      Request hostname: ${ctx.request.hostname},
      Request path: ${ctx.request.path}`
		});

		console.log(`Koa time: ${Date.now()}`);
		await next();
	});

	app.use(router.routes());

	app.on('error', (err, ctx) => {
		// catches all unhandled errors
	});

	app.listen(PORT, () => console.log(`Koa server running on http://localhost:${PORT}`));
}

module.exports = createKoaServer;
