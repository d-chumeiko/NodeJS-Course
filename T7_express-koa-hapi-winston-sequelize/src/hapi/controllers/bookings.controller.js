class BookingController {
  constructor(entityService) {
    this.entityService = entityService;
  }

  getBookings = async (req, h) => {
    try {
      return await this.entityService.bookings(req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }

  bookEvent = async (req, h) => {
    try {
      return await this.entityService.bookEvent(req.payload.eventId, req.userId, req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }

  cancelBooking = async (req, h) => {
    try {
      return await this.entityService.cancelBooking(req.payload.bookingId, req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }
}

module.exports = BookingController;
