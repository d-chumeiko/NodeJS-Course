const router = require('koa-router')();

const authRouter = require('./auth');
const bookingsRouter = require('./bookings');
const eventsRouter = require('./events');

router.use('/auth', authRouter.routes());
router.use('/bookings', bookingsRouter.routes());
router.use('/events', eventsRouter.routes());

module.exports = router;
