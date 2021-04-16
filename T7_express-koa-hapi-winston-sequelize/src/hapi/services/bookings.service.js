class BookingsService {
  constructor(model) {
    this.model = model;
  }

  bookings = async () => {
    return await this.model.scope('withModels').findAll();
  }

  bookEvent = async (eventId, userId) => {
    try {
      const booking = await this.model.create({
        eventId,
        userId
      });

      return await this.model.scope('withModels').findByPk(booking.id);
    } catch (e) {
      throw new Error(e);
    }
  }

  cancelBooking = async (bookingId) => {
    const booking = await this.model.scope('withModels').findByPk(bookingId);
    const event = booking.event;

    await booking.destroy();

    return event;
  }
}

module.exports = BookingsService;
