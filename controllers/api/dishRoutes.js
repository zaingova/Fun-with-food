const router = require("express").Router();
const Dish = require("../../models/Dish");

router.get("/", async (req, res) => {
  try {
    const dishData = await Dish.findAll();
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/data', async (req, res) => {
  try {
    const dishData = Dish.findAll({
      where: {
        has_nuts: req.body.has_nuts,
        has_meat: req.body.has_meat,
        has_dairy: req.body.has_dairy,
        has_gluten: req.body.has_gluten,
        has_shellfish: req.body.has_shellfish,
        has_soy: req.body.has_soy,
      },
    });

    const dishes = dishData.map((dish) => dish.get({ plain: true }));

    console.log({ dishes });
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
