const express = require("express");
const cookieSession = require("cookie-session");
const routes = require("./routes/main.route");
const passport = require("passport");
require("./config/passport");

const app = express();
const port = 3000;

app.use(
  cookieSession({
    name: "google-auth-session",
    keys: ["key1", "key2"],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Task5 app listening at http://localhost:${port}`);
});
