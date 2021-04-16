const jwt = require('jsonwebtoken');

const handleUnauthorized = function (res) {
  res.send(401);
};

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    return handleUnauthorized(res);
  }

  const token = authHeader.split(' ')[1];

  if (!token || token === '') {
    return handleUnauthorized(res);
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    return handleUnauthorized(res);
  }

  if (!decodedToken) {
    return handleUnauthorized(res);
  }

  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
}
