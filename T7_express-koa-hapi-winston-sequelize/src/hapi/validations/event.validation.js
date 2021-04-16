const Joi = require('@hapi/joi');

class EventValidation {
  getCreateValidator = () => {
    return {
      payload: Joi.object({
        title: Joi.string(),
        description: Joi.string(),
        price: Joi.number(),
        date: Joi.string(),
      })
    };
  }
  getUpdateValidator = () => {
    return {
      payload: Joi.object({
        id: Joi.string(),
        title: Joi.string(),
        description: Joi.string(),
        price: Joi.number(),
        date: Joi.string(),
      })
    };
  }
  getDeleteValidator = () => {
    return {
      payload: Joi.object({
        id: Joi.string(),
      })
    };
  }
}

module.exports = EventValidation;
