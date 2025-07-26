const db = require("../db/queries");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => { 
    const { firstName, lastName, username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await db.addUser([firstName, lastName, username, email, hashedPassword]);
        if (![firstName, lastName, username, email, hashedPassword]) {
        res.status(400).send("Information is required");
        return;
    }
    console.log(hashedPassword);
  res.redirect('/');
}

const render = (req, res) => {
    res.render("register");
};

module.exports = { addUser, render };