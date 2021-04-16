const { Router } = require('express');
const { validationResult } = require('express-validator');
const di = require('../di');

const authCheck = require('./auth-check-middleware');

const { BookingController, BookingValidator } = di.container;

const router = Router();

router.get('/', authCheck, BookingController.getBookings);

router.post(
	'/',
	authCheck,
	BookingValidator.getCreateValidator(),
	(req, res, next) => {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		next();
	},
	BookingController.bookEvent
);

router.delete(
	'/',
	authCheck,
	BookingValidator.getDeleteValidator(),
	(req, res, next) => {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		next();
	},
	BookingController.cancelBooking
);

module.exports = router;
