'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../services/AuthServices');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `username must be filled`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `password must be filled`
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: user => {
        if(!user.role) user.role = "staff"
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};