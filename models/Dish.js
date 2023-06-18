// Import sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Dish model
class Dish extends Model { }

// Initialize Dish Model with user_db database
Dish.init(
  {
    // id INT PRIMARY KEY
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // dish name STRING
    dish_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    // dish description TEXT
    dish_description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    // Has nuts BOOLEAN
    has_nuts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // Has meat BOOLEAN
    has_meat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // Has dairy BOOLEAN
    has_dairy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // Has gluten BOOLEAN
    has_gluten: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // Has shellfish BOOLEAN
    has_shellfish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // Has soy BOOLEAN
    has_soy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    // IMAGE STRING
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // WEBSITE 
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Stores the data
    sequelize,
    timestamps: false,
    // Prevent sequelize from renaming the table
    freezeTableName: true,
    underscored: true,
    modelName: "dish",
  }
);
// Exporting Dish Model

module.exports = Dish;
