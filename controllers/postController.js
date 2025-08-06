const render = (req, res) => {
    res.render("post", { user: req.user });
}

const post = (req, res) => {
    const { postMessage } = req.body;
    console.log("Message posted:", postMessage);
    res.redirect("/");
}

module.exports = { render, post };