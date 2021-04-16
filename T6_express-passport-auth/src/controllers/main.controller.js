const { showAfterLoginMsg } = require("../view/view");

const login = (req, res) => {
  res.send(showAfterLoginMsg(req.user));
};

const logout = (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
};

const sendError = (req, res) => {
  res.send("Unknown Error");
};

const redirectToRoot = (req, res) => {
  res.redirect("/");
};

module.exports = {
  logout,
  sendError,
  login,
  redirectToRoot,
};
