const { Sequelize } = require('sequelize');

const { config: { dbDriver, dbHost, dbName, dbPassword, dbPort, dbUser, pool } } = require('../config/config');
const setupModels = require('../db/models');

// Encoding the database user and password for the connection URI
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);

// Constructing the connection URI using the encoded user, password, host, port, and database name
const URI = `${dbDriver}://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI, {
  dialect: `${dbDriver}`,
  logging: console.log,
});

setupModels(sequelize)

module.exports = sequelize;
