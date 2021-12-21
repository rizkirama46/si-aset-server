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
    category_id: DataTypes.INTEGER,
    item_name: DataTypes.STRING,
    merk: DataTypes.STRING,
    year_acquisition: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'item',
    underscored: true,
  });
  return item;
};