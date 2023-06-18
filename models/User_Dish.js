// Import sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create User Dish model
class User_Dish extends Model { }


// Initialize Dish Model within user_db database
User_Dish.init(
  {
    // id INT PRIMARY
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    // user id INT FOREIGN KEY from USER model
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        id: "id",
      },
    },
    // user id INT FOREIGN KEY from DISH model
    dish_id: {
      type: DataTypes.INTEGER,
      unique: true,
      references: {
        model: "dish",
        id: "id",
      },
    },
  },
  {
    // Stores the data
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: "user_dish",
  }
);
// Export User_Dish Model 
module.exports = User_Dish;
