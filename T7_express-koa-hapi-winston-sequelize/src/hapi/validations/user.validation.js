const Joi = require('@hapi/joi');

class UserValidation {
  getCreateValidator = () => {
    return {
      payload: Joi.object({
        email: Joi.string().email(),
        password: Joi.string()
      })
    };
  }
}

module.exports = UserValidation;