'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class CreditCard extends Model {
    static associate (models) {
      
    }

    
  }
  CreditCard.init(
    {
      type: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      describe: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'CreditCard',
    }
  );
  return CreditCard;
};
