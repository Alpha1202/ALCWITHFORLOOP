module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define('meal', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
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
    catererId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Meals.associate = (models) => {
    Meals.belongsTo(models.caterer, {
      foreignKey: 'catererId',
      constraints: false,
      as: 'caterer',
    });
  };
  return Meals;
};
