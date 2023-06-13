const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Ingredient extends Model {}

Ingredient.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ingredient_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ingredient",
  }
);
