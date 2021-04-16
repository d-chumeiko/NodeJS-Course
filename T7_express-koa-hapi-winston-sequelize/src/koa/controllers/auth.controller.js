class AuthController {
  constructor(entityService) {
    this.entityService = entityService;
  }

  login = async (ctx, next) => {
    ctx.body = await this.entityService.login(ctx.request.body.email, ctx.request.body.password, ctx.dbContext);
  }

  signup = async (ctx, next) => {
    ctx.body = await this.entityService.signup(ctx.request.body.email, ctx.request.body.password, ctx.dbContext);
  }
}

module.exports = AuthController;
