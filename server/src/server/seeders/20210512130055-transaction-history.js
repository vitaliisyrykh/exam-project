'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(
     'TransactionHistories',
     [
       {
         operationType: 'INCOME',
         sum: 100,
         userId: 1
       },
       {
         operationType: 'CONSUMPTION',
         sum: 50,
         userId: 1
       }
     ],
     {}
   );
  },
};
