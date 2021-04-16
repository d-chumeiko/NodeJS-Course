const jwt = require('jsonwebtoken');

const handleUnauthorized = function (ctx) {
  ctx.throw(401, 'Unauthorized');
};

module.exports = async (ctx, next) => {
  const authHeader = ctx.headers.authorization;

  if (!authHeader) {
    return handleUnauthorized(ctx);
  }

  const token = authHeader.split(' ')[1];

  if (!token || token === '') {
    return handleUnauthorized(ctx);
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return handleUnauthorized(ctx);
  }

  if (!decodedToken) {
    return handleUnauthorized(ctx);
  }

  ctx.isAuth = true;
  ctx.userId = decodedToken.userId;

  await next();
}
