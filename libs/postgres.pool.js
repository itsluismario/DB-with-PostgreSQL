const { Pool } = require('pg');

const { config } = require('../config/config');

let URI = '';

if (config.isPord) {
  URI= config.dbUrl;
} else {
  // Encoding the database user and password for the connection URI
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  // Constructing the connection URI using the encoded user, password, host, port, and database name
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
}

const pool = new Pool({ connectionString: URI });

module.exports = pool;

