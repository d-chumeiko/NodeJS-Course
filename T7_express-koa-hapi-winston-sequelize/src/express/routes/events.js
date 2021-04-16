const { Router } = require('express');
const { validationResult } = require('express-validator');
const di = require('../di');

const authCheck = require('./auth-check-middleware');
const { EventController, EventValidator } = di.container;

const router = Router();

router.get('/', EventController.getEvents);

router.post(
	'/',
	authCheck,
	EventValidator.getCreateValidator(),
	(req, res, next) => {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		next();
	},
	EventController.createEvent
);

router.put(
	'/',
	authCheck,
	EventValidator.getUpdateValidator(),
	(req, res, next) => {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		next();
	},
	EventController.updateEvent
);

router.delete(
	'/',
	authCheck,
	EventValidator.getDeleteValidator(),
	(req, res, next) => {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		next();
	},
	EventController.deleteEvent
);

module.exports = router;
