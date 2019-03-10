module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('menu', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    meals: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catererId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Menu.associate = (models) => {
    Menu.belongsTo(models.caterer, {
      foreignKey: 'catererId',
      constraints: false,
      as: 'caterer',
    });
  };
  return Menu;
};
