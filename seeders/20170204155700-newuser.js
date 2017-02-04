'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users', [
      {
      name: 'Fenetta',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Timothy',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Fenessa',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Kapri',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Andrew',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
