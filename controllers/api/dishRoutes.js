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

router.get('/data/:hasNuts/:hasMeat/:hasDairy/:hasGluten/:hasShellfish/:hasSoy', async (req, res) => {
  try {
    console.log(req.params);
    const dishData = await Dish.findAll({
      where: {
        has_nuts: (req.params.hasNuts == 'true'),
        has_meat: req.params.hasMeat,
        has_dairy: req.params.hasDairy,
        has_soy: req.params.hasSoy,
        has_gluten: req.params.hasGluten,
        has_shellfish: req.params.hasShellfish,
        has_soy: req.params.hasSoy,
      },
    });

    console.log(dishData);

    //console.log(dishData)
    res.status(200).json("OK");
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
