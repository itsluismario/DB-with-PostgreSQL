const { Client } = require('pg');
const { Pool } = require('pg');

require('dotenv').config();

async function getConnection() {
  const pool = new Client({
    host: 'localhost',
    port: 49271,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  await pool.connect();
  return pool;

}

module.exports = getConnection;

