if (process.env.NODE_ENV !== 'environment')
  // production | testing | staging
	require('dotenv').config({ path: './config/.env'
});

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.PGUSER,
  dbPassword: process.env.PGPASSWORD,
  dbHost: process.env.PGHOST,
  dbName: process.env.PGNAME,
  dbPort: process.env.PGPORT
}

module.exports = { config };
