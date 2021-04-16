const router = require('koa-router')();

const di = require('../di');

const { AuthController, UserValidator } = di.container;

router.post('/login', UserValidator.userValidate, AuthController.login);

router.post('/signup', UserValidator.userValidate, AuthController.signup);

module.exports = router;
