const router = require('koa-router')();

const authCheck = require('./auth-check-middleware');

const di = require('../di');

const {
  EventController,
  EventValidator
} = di.container;

router.get('/', EventController.getEvents);
router.post('/', authCheck, EventValidator.createValidator, EventController.createEvent);
router.put('/', authCheck, EventValidator.updateValidator, EventController.updateEvent);
router.delete('/', authCheck, EventValidator.deleteValidator, EventController.deleteEvent);

module.exports = router;
