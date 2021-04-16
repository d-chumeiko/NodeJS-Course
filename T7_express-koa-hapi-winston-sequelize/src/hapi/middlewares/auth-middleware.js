const dbContext = require('../../database/models');

module.exports = async (decoded, request, h) => {
  const user = await dbContext.User.findByPk(decoded.userId);

  if (!user) {
    return { isValid: false };
  }

  request.userId = user.id;
  return { isValid: true };
};