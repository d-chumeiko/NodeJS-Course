const { check } = require('express-validator');

class BookingValidation {
	getCreateValidator = () => {
		return [ check('eventId').isLength({ min: 5 }) ];
	};

	getDeleteValidator = () => {
		return [ check('bookingId').isLength({ min: 5 }) ];
	};
}

module.exports = BookingValidation;
