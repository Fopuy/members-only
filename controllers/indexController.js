const pool = require("../db/pool");

const getPosts = async (req, res) => {
    const joinedPosts = await pool.query(
        `SELECT posts.*, users.first_name, users.last_name, users.username
         FROM posts
         JOIN users ON posts.user_id = users.id
         ORDER BY posts.created_at DESC`
    );
    const posts = joinedPosts.rows;
    console.log(posts)
    res.render("index", {
      user: req.user,  
      posts            
    });
}

module.exports = { getPosts };