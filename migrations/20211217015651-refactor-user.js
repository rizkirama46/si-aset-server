'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING,
      allowNull: false
    })

    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    })

    await queryInterface.changeColumn('users', 'role', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'username', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.changeColumn('users', 'password', {
      type: Sequelize.STRING,
      allowNull: true
    })

    await queryInterface.changeColumn('users', 'role', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
};
