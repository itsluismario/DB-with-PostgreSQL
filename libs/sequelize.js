const { Sequelize } = require('sequelize');

const { config: { dbUrl, isPord } } = require('../config/config');
const setupModels = require('../db/models');

const options = {
  dialect: 'postgres',
  logging: isPord ? false : true,
}

if (isPord) {
  options.ssl = {
    rejectUnauthorized: false
  }
}

const sequelize = new Sequelize(dbUrl, options);

setupModels(sequelize)

module.exports = sequelize;
