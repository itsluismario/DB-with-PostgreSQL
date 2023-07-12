require('dotenv').config({ path: './config/.env'});

/**
 * @description variables of database server
 */

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.PGUSER,
  dbPassword: process.env.PGPASSWORD,
  dbHost: process.env.PGHOST,
  dbName: process.env.PGNAME,
  dbPort: process.env.PGPORT || '5432'
}

module.exports = { config };
