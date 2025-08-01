const path = require("node:path");
const express = require ("express");
const app = express();
const addUserRouter = require("./routers/addUserRouter");
const loginRouter = require("./routers/loginRouter");
const postRouter = require("./routers/postRouter");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'joshuadejesus',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

// make flash messages available in all templates
app.use((req, res, next) => {
  next();
});


app.get("/", (req, res) => {
    res.render("index", { user: req.user});
});
app.use("/register", addUserRouter);
app.use("/login", loginRouter);
app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
app.use("/post", postRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});