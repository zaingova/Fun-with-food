// import sequelize, User model and userData.json
const sequelize = require("../config/connection");
const { User } = require("../models");
const { Dish } = require("../models");
const userData = require("./userData.json");
const dishData = require("./dishData.json");

// Store the data in userData.json and dishData.json in the User model
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Dish.bulkCreate(dishData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();