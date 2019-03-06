export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
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
  return Menu;
};
