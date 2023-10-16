'use strict';

const { OrderSchema, ORDER_TABLE } = require('../models/order.model')

/** @type {import('sequelize-cli').Migration}*/
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, OrderSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE)
  }
};
