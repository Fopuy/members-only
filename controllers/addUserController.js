const db = require("../db/queries");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");

const addUser = async (req, res) => { 
    const { firstName, lastName, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("register", {
        errors: errors.array(),
        data: req.body // so user input isn't lost
      });
    }
    await db.addUser([firstName, lastName, username, email, hashedPassword]);
        if (![firstName, lastName, username, email, hashedPassword]) {
        res.status(400).send("Information is required");
        return;
    }
  res.redirect('/');
}

const render = (req, res) => {
    res.render("register", { errors: [], data: {} });
};

module.exports = { addUser, render };