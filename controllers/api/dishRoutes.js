const router = require("express").Router();
const Dish = require("../../models/Dish");
const withAuth = require('../../utils/auth')

router.get("/", async (req, res) => {
  try {
    const dishData = await Dish.findAll();
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
