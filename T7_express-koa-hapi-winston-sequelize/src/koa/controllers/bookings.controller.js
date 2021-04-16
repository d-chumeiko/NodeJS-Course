class BookingController {
  constructor(entityService) {
    this.entityService = entityService;
  }

  getBookings = async (ctx, next) => {
    ctx.body = await this.entityService.bookings(ctx.dbContext);
  }

  bookEvent = async (ctx, next) => {
    ctx.body = await this.entityService.bookEvent(ctx.request.body.eventId, ctx.userId, ctx.dbContext);
  }

  cancelBooking = async (ctx, next) => {
    ctx.body = await this.entityService.cancelBooking(ctx.request.body.bookingId, ctx.dbContext);
  }
}

module.exports = BookingController;