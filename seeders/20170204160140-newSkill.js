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
    return queryInterface.bulkInsert('Skills', [
      {
      name: 'Athletic',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Intelligence',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Coding',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Medic',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Accounting',
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
