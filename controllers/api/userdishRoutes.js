const router = require("express").Router();
const User_Dish = require("../../models/User_Dish");
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {

    const duplicate = await User_Dish.findOne(req.body, {
      where: {
        dish_id: req.body.dishData,
      }
    });

    console.log(duplicate);

    if (duplicate) {
      return;
    }

    const addedDish = await User_Dish.create({
      user_id: req.session.user_id,
      dish_id: req.body.dishData,
    });

    //console.log(addedDish);

    res.status(200).json(addedDish);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;