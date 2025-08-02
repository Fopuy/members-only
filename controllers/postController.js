const express = require('express');
const router = express.Router();

const render = (req, res) => {
    res.render("post", { user: req.user });
}

module.exports = { render };