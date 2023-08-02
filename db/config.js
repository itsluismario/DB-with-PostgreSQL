const { Sequelize } = require('sequelize');

const { config: { dbDriver, dbUrl } } = require('../config/config');

module.exports = {
  development: {
    url: dbUrl,
    dialect: `${dbDriver}`,
  },
  production: {
    url: dbUrl,
    dialect: `${dbDriver}`,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
