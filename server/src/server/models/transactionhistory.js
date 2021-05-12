'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionHistory extends Model {
   
    static associate(models) {
      TransactionHistory.belongsTo(models.User,{
        foreignkey: 'userId',
        targetKey: 'id'
      })
    }
  };
  TransactionHistory.init({
    operationType: {
      type:DataTypes.ENUM('INCOME', 'CONSUMPTION'),
      allowNull: false,
    },
    sum: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 0
      }
    },
    userId: {
      type:DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'TransactionHistory',
  });
  return TransactionHistory;
};