'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asset_code: {
        allowNull: false,
        type: Sequelize.STRING
      },
      item_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'items', key: 'id' }
      },
      location_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'locations', key: 'id' }
      },
      asset_volume: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      asset_unit: {
        allowNull: false,
        type: Sequelize.STRING
      },
      asset_condition: {
        allowNull: false,
        type: Sequelize.STRING
      },
      asset_age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      asset_price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('assets');
  }
};