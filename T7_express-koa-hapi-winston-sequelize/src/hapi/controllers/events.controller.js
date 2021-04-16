class EventController {
  constructor(entityService) {
    this.entityService = entityService;
  }

  getEvents = async (req, h) => {
    try {
      return await this.entityService.events(req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }

  createEvent = async (req, h) => {
    try {
      return await this.entityService.createEvent(req.payload, req.userId, req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }

  updateEvent = async (req, h) => {
    try {
      return await this.entityService.updateEvent(req.payload, req.userId, req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }

  deleteEvent = async (req, h) => {
    try {
      return await this.entityService.deleteEvent(req.payload, req.userId, req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }
}

module.exports = EventController;
