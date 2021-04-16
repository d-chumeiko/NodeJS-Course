const di = require('../di');

const {
  EventController,
  EventValidator
} = di.container;

module.exports = [
  {
    method: 'GET',
    path: '/events',
    handler: EventController.getEvents
  },
  {
    method: 'POST',
    path: '/events',
    options: {
      auth: 'jwt',
      validate: EventValidator.getCreateValidator()
    },
    handler: EventController.createEvent
  },
  {
    method: 'PUT',
    path: '/events',
    options: {
      auth: 'jwt',
      validate: EventValidator.getUpdateValidator()
    },
    handler: EventController.updateEvent
  },
  {
    method: 'DELETE',
    path: '/events',
    options: {
      auth: 'jwt',
      validate: EventValidator.getDeleteValidator()
    },
    handler: EventController.deleteEvent
  }
]
