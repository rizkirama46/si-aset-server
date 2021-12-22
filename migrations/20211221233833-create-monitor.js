'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('monitors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asset_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'assets', key: 'id' }
      },
      condition: {
        allowNull: false,
        type: Sequelize.STRING
      },
      damage: {
        allowNull: false,
        type: Sequelize.STRING
      },
      maintenance: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amount_damage: {
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
    await queryInterface.dropTable('monitors');
  }
};