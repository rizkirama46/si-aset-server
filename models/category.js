'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  category.init({
    category_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `category name must be filled`
        }
      }
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `category code must be filled`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'category',
    underscored: true,
  });
  return category;
};