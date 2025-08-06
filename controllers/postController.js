const db = require("../db/queries");
const pool = require("../db/pool");

//const render = (req, res) => {
//    res.render("post", { user: req.user });
//}

const post = async (req, res) => {
    const { postMessage } = req.body;
    const id = req.user.id;
    console.log("User ID:", id);
    console.log("Message posted:", postMessage);
    await db.postMessage(id, postMessage);
    res.redirect("/");
}

const getPosts = async (req, res) => {
    const result = await pool.query("SELECT * FROM posts ORDER BY created_at DESC");
    const posts = result.rows;
    res.render("post", {
      user: req.user,  
      posts            
    });
}

module.exports = { post, getPosts };