const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dish extends Model { }

Dish.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dish_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dish_description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    has_nuts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    has_meat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    has_dairy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    has_gluten: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    has_shellfish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    has_soy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "dish",
  }
);

module.exports = Dish;
