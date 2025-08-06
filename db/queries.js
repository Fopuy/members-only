const pool = require("./pool");

async function addUser([firstName, lastName, username, email, password]) {
    await pool.query(
    `INSERT INTO users (first_name, last_name, username, email, password)
     VALUES ($1, $2, $3, $4, $5)`,
    [firstName, lastName, username, email, password]
  );
}

async function findUserByEmail(email){
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );
  return result.rows[0] //returns undefined if there is no user with that email
}

async function findUserbyUsername(username) {
  const result = await pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );
  return result.rows[0];
}

async function postMessage(userId, postMessage) {
  await pool.query(
    "INSERT INTO posts (user_id, post_message) VALUES ($1, $2)",
    [userId, postMessage]
  );
}

module.exports = {
  addUser, findUserByEmail, findUserbyUsername, postMessage
};
