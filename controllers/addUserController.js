const db = require("../db/queries");

const addUser = async (req, res) => { 
    const { firstName, lastName, username, email, password } = req.body;

    await db.addUser([firstName, lastName, username, email, password]);
        if (![firstName, lastName, username, email, password]) {
        res.status(400).send("Information is required");
        return;
    }
  res.redirect('/');
}

const render = (req, res) => {
    res.render("register");
};

module.exports = { addUser, render };