'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../../constants');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {}

    async comparePassword (password) {
      return bcrypt.compare(password, this.getDataValue('password'));
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        field: 'passwordHash',
        type: DataTypes.TEXT,
        allowNull: false,
        set (password) {
          bcrypt.hash(password, SALT_ROUNDS, (err, hash) => {
            if (err) {
              throw err;
            }
            this.setDataValue('password', hash);
          });
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      avatar: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('customer', 'creator'),
        allowNull: false,
      },
      balance: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
        validate: {
          min: 0,
        },
      },
      accesToken: {
        type: DataTypes.TEXT,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
