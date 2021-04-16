const { validationResult } = require('express-validator');

class EventController {
	constructor(entityService) {
		this.entityService = entityService;
	}

	getEvents = async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}

		const result = await this.entityService.events(req.dbContext);
		return res.status(200).send(result);
	};

	createEvent = async (req, res) => {
		try {
			const result = await this.entityService.createEvent(req.body, req.userId, req.dbContext);
			return res.status(200).send(result);
		} catch (err) {
			return res.status(400).send(err.message);
		}
	};

	updateEvent = async (req, res) => {
		try {
			const result = await this.entityService.updateEvent(req.body, req.userId, req.dbContext);
			return res.status(200).send(result);
		} catch (err) {
			return res.status(400).send(err.message);
		}
	};

	deleteEvent = async (req, res) => {
		try {
			const result = await this.entityService.deleteEvent(req.body, req.userId, req.dbContext);
			return res.status(200).send(result);
		} catch (err) {
			return res.status(400).send(err.message);
		}
	};
}

module.exports = EventController;
