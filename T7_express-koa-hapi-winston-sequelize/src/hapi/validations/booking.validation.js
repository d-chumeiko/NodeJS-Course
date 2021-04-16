const Joi = require('@hapi/joi');

class BookingValidation {
  getCreateValidator = () => {
    return {
      payload: Joi.object({
        eventId: Joi.string()
      })
    };
  }

  getDeleteValidator = () => {
    return {
      payload: Joi.object({
        bookingId: Joi.string()
      })
    };
  }
}

module.exports = BookingValidation;

