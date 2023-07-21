const { Sequelize } = require('sequelize');

const { config: { dbHost, dbName, dbPassword, dbPort, dbUser } } = require('../config/config');
const setupModels = require('../db/models');

// Encoding the database user and password for the connection URI
const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);

console.log(dbPassword);
// Constructing the connection URI using the encoded user, password, host, port, and database name
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  loggin: console.log,
});

setupModels(sequelize);

sequelize.sync({ logging: console.log });

module.exports = sequelize;
