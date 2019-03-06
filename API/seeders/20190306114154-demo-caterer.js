module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Caterers', [{
      id: 1,
      name: 'Nzube',
      email: 'nzubennamani@gmail.com',
      phone: '08139228639',
      password: 'jesusandmary',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {  
    return queryInterface.bulkDelete('Caterers', null, {});
  },
};
