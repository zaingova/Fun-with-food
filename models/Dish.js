const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { DataTypes } = require('sequelize');
const { DataTypes } = require('sequelize');

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
    
  }
)