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
    const dishData = await Dish.findAll({
      where: {
        has_nuts: req.body.hasNuts,
        has_meat: req.body.hasMeat,
        has_dairy: req.body.hasDairy,
        has_soy: req.body.hasSoy,
        has_gluten: req.body.hasGluten,
        has_shellfish: req.body.hasShellfish,
        has_soy: req.body.hasSoy,
      },
    });

    const dishes = dishData.map((dish) => dish.get({ plain: true }));

    // console.log(dishes);
    console.log({ dishes });
    res.status(200).json(dishData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
