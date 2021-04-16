const di = require('../di');

const {
  AuthController,
  UserValidator
} = di.container;


module.exports = [
  {
    method: 'POST',
    path: '/auth/login',
    handler: AuthController.login,
    options: {
      validate: UserValidator.getCreateValidator()
    }
  },
  {
    method: 'POST',
    path: '/auth/signup',
    handler: AuthController.signup,
    options: {
      validate: UserValidator.getCreateValidator()
    }
  }
]
