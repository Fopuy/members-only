const db = require("../db/queries");

const render = (req, res) => {
    res.render("post", { user: req.user });
}

const post = async (req, res) => {
    const { postMessage } = req.body;
    const id = req.user.id;
    console.log("User ID:", id);
    console.log("Message posted:", postMessage);
    await db.postMessage(id, postMessage);
    res.redirect("/");
}

module.exports = { render, post };