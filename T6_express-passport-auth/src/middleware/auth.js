const { showLoginMsg } = require("../view/view");

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  }
  res.status(401).send(showLoginMsg());
};

module.exports = { isLoggedIn };
