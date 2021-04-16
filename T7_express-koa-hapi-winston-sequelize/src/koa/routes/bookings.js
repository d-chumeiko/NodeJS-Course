const router = require('koa-router')();

const authCheck = require('./auth-check-middleware');
const di = require('../di');

const { BookingController, BookingValidator } = di.container;

router.get('/', authCheck, BookingController.getBookings);

router.post('/', authCheck, BookingValidator.createValidator, BookingController.bookEvent);

router.delete('/', authCheck, BookingValidator.deleteValidator, BookingController.cancelBooking);

module.exports = router;
