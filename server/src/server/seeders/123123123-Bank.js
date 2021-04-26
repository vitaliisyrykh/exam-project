module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banks', [
      {
        cardNumber: '4111111111111114',
        name: 'SquadHelp',
        expiry: '12/22',
        cvc: '500',
        balance: 0,
      },
      {
        cardNumber: '4111111111111111',
        name: 'yriy',
        expiry: '12/22',
        cvc: '500',
        balance: 50000,
      },
    ], {});
  },

};