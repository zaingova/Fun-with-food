const Dish = require("./Dish");
const User = require("./User");
const User_Dish = require("./User_Dish");

Dish.belongsToMany(User, {
  through: {
    model: "user_dish",
    foreignKey: "dish_id",
  },
});

User.hasMany(Dish, {
  foreignKey: "user_id",
});

module.exports = {
  Dish,
  User,
  User_Dish,
};
