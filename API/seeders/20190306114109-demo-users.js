module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      name: 'Nnamani',
      email: 'nnamani@gmail.com',
      phone: '08038782583',
      password: 'jesusandmary',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {  
    return queryInterface.bulkDelete('Users', null, {});
  },
};
