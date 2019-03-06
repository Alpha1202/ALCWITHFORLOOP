'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Menu', [{
        meals: 'Rice',
        catererId: 1,
        createdAt: new Date(),
      updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Menu', null, {});

  }
};
