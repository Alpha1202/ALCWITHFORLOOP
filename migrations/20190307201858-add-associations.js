module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'orders',
      'CatererId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'caterers',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    )
      .then(() => {
        return queryInterface.addColumn(
          'meals',
          'CatererId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'caterers',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        )
      })

      .then(() => {
        return queryInterface.addColumn(
          'menus',
          'CatererId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'caterers',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        )
      })

      .then(() => {
        return queryInterface.addColumn(
          'orderitems',
          'MealId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'meals',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        )
      })
      .then(() => {
        return queryInterface.addColumn(
          'orders',
          'UserId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        )
      })
      .then(() => {
        return queryInterface.addColumn(
          'orderitems',
          'UserId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'Users',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          }
        )
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'orders',
      'CatererId',
    )
      .then(() => {
        return queryInterface.removeColumn(
          'meals',
          'CatererId',
        )
      })
      .then(() => {
        return queryInterface.removeColumn(
          'menus',
          'CatererId',
        )
      })
      .then(() => {
        return queryInterface.removeColumn(
          'orderitems',
          'MealId',
        )
      })
      .then(() => {
        return queryInterface.removeColumn(
          'orders',
          'UserId',
        )
      })
      .then(() => {
        return queryInterface.removeColumn(
          'orderitems',
          'UserId',
        )
      })
  }    
};



// Orders.belongsTo(models.Meals, {
//   foreignKey: 'mealId',
//   as: 'Meals'
// });