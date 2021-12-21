'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      asset.belongsTo(models.item)
      asset.belongsTo(models.location)
    }
  };
  asset.init({
    asset_code: DataTypes.STRING,
    item_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER,
    asset_volume: DataTypes.INTEGER,
    asset_piece: DataTypes.STRING,
    asset_condition: DataTypes.STRING,
    asset_age: DataTypes.INTEGER,
    asset_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'asset',
    underscored: true,
  });
  return asset;
};