const { Router } = require('express');

const rootRouter = Router();

const authRouter = require('./auth');
const eventsRouter = require('./events');
const bookingsRouter = require('./bookings');

rootRouter.use('/auth', authRouter);
rootRouter.use('/events', eventsRouter);
rootRouter.use('/bookings', bookingsRouter);

module.exports = rootRouter;
