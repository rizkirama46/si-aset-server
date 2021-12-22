'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.category)
      item.hasOne(models.asset)
    }
  };
  item.init({
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `category must be filled`
        }
      }
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `item name must be filled`
        }
      }
    },
    merk: DataTypes.STRING,
    year_acquisition: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `year acquistion must be filled`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'item',
    underscored: true,
  });
  return item;
};