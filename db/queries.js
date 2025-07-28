const pool = require("./pool");

//async function getAllCards() {
//  const { rows } = await pool.query("SELECT * FROM cards;");
//  return rows;
//}

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

//async function deleteCard(id) {
//  await pool.query(
//    `DELETE FROM cards WHERE id = $1`,
//    [id]
//  )
//}

module.exports = {
  addUser, findUserByEmail
};
