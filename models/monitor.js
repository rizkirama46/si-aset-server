'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class monitor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      monitor.belongsTo(models.asset)
    }
  };
  monitor.init({
    asset_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `asset must be filled`
        }
      }
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `condition must be filled`
        }
      }
    },
    damage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `damage must be filled`
        }
      }
    },
    maintenance:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `maintenance must be filled`
        }
      }
    },
    amount_damage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `amount of damage must be filled`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'monitor',
    underscored: true,
  });
  return monitor;
};