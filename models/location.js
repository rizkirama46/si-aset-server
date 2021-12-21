'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      location.hasMany(models.asset)
    }
  };
  location.init({
    location_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `location name must be filled`
        }
      }
    },
    location_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty:{
          msg: `location code must be filled`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'location',
    underscored: true,
  });
  return location;
};