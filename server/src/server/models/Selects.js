'use strict';

module.exports = (sequelize, DataTypes) => {
  const Selects = sequelize.define('Selects', {
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
      timestamps: false,
    });

  return Selects;
};
