module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('orderItem', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    mealId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.meal, {
      foreignKey: 'mealId',
      constraints: false,
      as: 'meal',
    });
  };
  return OrderItem;
};