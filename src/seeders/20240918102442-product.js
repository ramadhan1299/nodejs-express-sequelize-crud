'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'garam',
          price: 49.99,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'merica',
          price: 79.99,
          stock: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'lada',
          price: 99.99,
          stock: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
