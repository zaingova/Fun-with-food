const router = require("express").Router();
const User_Dish = require("../../models/User_Dish");
const withAuth = require('../../utils/auth');

// route for saving a dish to the database
router.post('/', withAuth, async (req, res) => {
  try {
    // adds a dish that has the same user_id
    const addedDish = await User_Dish.create({
      user_id: req.session.user_id,
      dish_id: req.body.dishData,
    });

    res.status(200).json(addedDish);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const savedDishData = await User_Dish.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!savedDishData) {
      res.status(404).json({ message: 'No dish found with this id!' });
      return;
    }

  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;