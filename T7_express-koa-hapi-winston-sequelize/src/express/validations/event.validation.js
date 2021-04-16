const { check } = require('express-validator');

class EventValidation {
	getCreateValidator = () => {
		return [
			check('title').isLength({ min: 5 }),
			check('description').isLength({ min: 5 }),
			check('date').isLength({ min: 5 }),
			check('price').isNumeric()
		];
	};
	getUpdateValidator = () => {
		return [
			check('id').isString(),
			check('title').isLength({ min: 5 }),
			check('description').isLength({ min: 5 }),
			check('date').isLength({ min: 5 }),
			check('price').isNumeric()
		];
	};
	getDeleteValidator = () => {
		return [ check('id').not().isEmpty() ];
	};
}

module.exports = EventValidation;
