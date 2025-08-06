const { Pool } = require("pg");
//module.exports = new Pool({
//  host: "localhost",
//  user: "fopuy",
//  database: "fopuy",
//  password: 
//  port: 5432
//});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // ✅ from Railway
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
});

module.exports = pool;