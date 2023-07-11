const { Pool } = require('pg');

const { config } = require('../config/config');

// Encoding the database user and password for the connection URI
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

// Constructing the connection URI using the encoded user, password, host, port, and database name
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI });

module.exports = pool;

