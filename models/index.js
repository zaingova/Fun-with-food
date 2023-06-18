// Imports all the Models
const Dish = require("./Dish");
const User = require("./User");
const User_Dish = require("./User_Dish");

// Dishes belongs to many User thourgh dish_id from mode User_Dish 
Dish.belongsToMany(User, {
  through: {
    model: "user_dish",
    foreignKey: "dish_id",
  },
});

// Users has many dishes using ForeignKey user_id
User.hasMany(Dish, {
  foreignKey: "user_id",
});

// Exports all the Models
module.exports = {
  Dish,
  User,
  User_Dish,
};
