const router = require("express").Router();
const userDish = require("../../models/User_Dish");
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  try {
    const addedDish = userDish.create({
      user_id: 3,
      dish_id: 46,
    });

    console.log(addedDish);

    res.status(200).json(addedDish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;