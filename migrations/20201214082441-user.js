'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      // Column-1, user_id is an object with  
      // properties like type, keys,  
      // validation of column. 
      user_id: {

        // Sequelize module has INTEGER Data_Type. 
        type: Sequelize.INTEGER,

        // To increment user_id automatically. 
        autoIncrement: true,

        // user_id can not be null. 
        allowNull: false,

        // For uniquely identify user. 
        primaryKey: true
      },

      // Column-2, name 
      name: { type: Sequelize.STRING, allowNull: false },

      // Column-3, email 
      email: { type: Sequelize.STRING, allowNull: false },

      // Column-4, default values for 
      // dates => current time 
      myDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

      // Timestamps 
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
