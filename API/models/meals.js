export default (sequelize, DataTypes) => {
  const Meals = sequelize.define('meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      default: null,
    },
  });

  return Meals;
};
