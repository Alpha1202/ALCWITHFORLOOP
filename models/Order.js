module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_status: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    catererId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Order.associate = (models) => {
    Order.belongsTo(models.caterer, {
      foreignKey: 'catererId',
      constraints: false,
      as: 'caterer',
    });
  };
  return Order;
};
