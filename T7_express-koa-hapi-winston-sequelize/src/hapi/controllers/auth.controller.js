class AuthController {
  constructor(entityService) {
    this.entityService = entityService;
  }

  login = async (req, h) => {
    try {
      return await this.entityService.login(req.payload.email, req.payload.password, req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }

  signup = async (req, h) => {
    try {
      return await this.entityService.signup(req.payload.email, req.payload.password, req.dbContext);
    } catch (err) {
      return h.response(err.message).code(400);
    }
  }
}

module.exports = AuthController;
