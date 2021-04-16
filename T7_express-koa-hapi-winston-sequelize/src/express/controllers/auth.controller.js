class AuthController {
  constructor(entityService) {
    this.entityService = entityService;
  }

  login = async (req, res) => {
    try {
      let loginData = await this.entityService.login(req.body.email, req.body.password, req.dbContext);
      res.status(200).send(loginData);
      return loginData
    } catch (err) {
      return res.status(400).send(err.message);
    }
  }

  signup = async (req, res) => {
    try {
      let signupData = await this.entityService.signup(req.body.email, req.body.password, req.dbContext);
      res.status(200).send(signupData);
      return signupData
    } catch (err) {
      return res.status(400).send(err.message);
    }
  }
}

module.exports = AuthController;
