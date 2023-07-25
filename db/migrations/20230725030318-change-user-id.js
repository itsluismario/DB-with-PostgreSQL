'use strict';

const { CUSTOMER_TABLE } = require('./../models/customer.model');
const { DataTypes } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.addConstraint(CUSTOMER_TABLE, {
      type: 'unique',
      fields: ['user_id'],
      name: 'unique_userId_constraint'
    });
  },

  async down(queryInterface) {
    return queryInterface.removeConstraint(CUSTOMER_TABLE, 'unique_userId_constraint');
  }
};
