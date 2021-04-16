const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new Strategy(
    {
      clientID:
        "806238628928-fm0h5ng05qk4od7asqg3joi020aj490s.apps.googleusercontent.com",
      clientSecret: "cIDiP2X2HrnKJuT_MG6w_00s",
      callbackURL: "http://localhost:3000/api/account/google",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
