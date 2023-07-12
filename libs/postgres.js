const { Client } = require('pg');

require('dotenv').config();

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 2001,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGNAME,
  });
  await client.connect();
  return client;

}

module.exports = getConnection;

