'use strict';
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Buyer',
          lastName: 'Buyerovich',
          displayName: 'buyer',
          passwordHash: bcrypt.hashSync('Test1234', SALT_ROUNDS),
          email: 'buyer@mail.com',
          role: 'customer',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Creator',
          lastName: 'Creatorovich',
          displayName: 'creator',
          passwordHash: bcrypt.hashSync('Test1234', SALT_ROUNDS),
          email: 'creator@mail.com',
          role: 'creator',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {},
};
