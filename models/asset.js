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
      asset.hasMany(models.monitor)
    }
  };
  asset.init({
    asset_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `asset code must be filled`
        }
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `item must be filled`
        }
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `location must be filled`
        }
      }
    },
    asset_volume: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `volume must be filled`
        }
      }
    },
    asset_piece: DataTypes.STRING,
    asset_condition: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `condition must be filled`
        }
      }
    },
    asset_age:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `age must be filled`
        }
      }
    },
    asset_price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `price must be filled`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'asset',
    underscored: true,
  });
  return asset;
};