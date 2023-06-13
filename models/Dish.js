const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dish extends Model {}

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
      type: DataTypes.STRING,
      validate: {
        len: [12],
      },
    },
    dish_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "ingredient",
        id: "id",
      },
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
