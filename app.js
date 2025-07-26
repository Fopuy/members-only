const path = require("node:path");
const express = require ("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index")
});
app.get("/register", (req, res) => {
    res.render("register");
});
app.get("/login", (req, res) => {
    res.render("login");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});