module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banks', [
      {
        cardNumber: '4111111111111112',
        name: 'SquadHelp',
        expiry: '11/20',
        cvc: '500',
        balance: 0,
      },
      {
        cardNumber: '4111111111111111',
        name: 'yriy',
        expiry: '09/22',
        cvc: '043',
        balance: 5000,
      },
    ], {});
  },

};