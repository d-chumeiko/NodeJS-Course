const di = require('../di');

const {
  BookingController,
  BookingValidator
} = di.container;


module.exports = [
  {
    method: 'GET',
    path: '/bookings',
    options: {
      auth: 'jwt'
    },
    handler: BookingController.getBookings
  },
  {
    method: 'POST',
    path: '/bookings',
    options: {
      auth: 'jwt',
      validate: BookingValidator.getCreateValidator()
    },
    handler: BookingController.bookEvent
  },
  {
    method: 'DELETE',
    path: '/bookings',
    options: {
      auth: 'jwt',
      validate: BookingValidator.getDeleteValidator()
    },
    handler: BookingController.cancelBooking
  }
]
