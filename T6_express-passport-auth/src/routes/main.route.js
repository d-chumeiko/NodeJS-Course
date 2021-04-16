const passport = require("passport");
const { Router } = require("express");
const { isLoggedIn } = require("../middleware/auth");
const {
  logout,
  sendError,
  login,
  redirectToRoot,
} = require("../controllers/main.controller");

const router = Router();

router.get("/", isLoggedIn, login);
router.get("/auth/error", sendError);
router.get("/logout", logout);

router.get(
  "/auth",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/api/account/google",
  passport.authenticate("google", { failureRedirect: "/auth/error" }),
  redirectToRoot
);

module.exports = router;
