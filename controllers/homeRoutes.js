const router = require("express").Router();
const { Dish, User, User_Dish } = require("../models");
const withAuth = require("../utils/auth");

// default route to homepage -> requires authorization and also sends back logged_in status in render()
router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/save", withAuth, async (req, res) => {
  try {
    const dishData = await User_Dish.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    const usersDishes = dishData.map((user_dish) => user_dish.get({ plain: true }));
    let empty = [];
    for (let i = 0; i < usersDishes.length; i ++) {
      console.log(usersDishes[i].dish_id);
      const dishData2 = await Dish.findByPk({id: usersDishes[i].dish_id});
      const usersDishes2 = dishData2.map((user_dish) => user_dish.get({ plain: true }));
      console.log(usersDishes2.dish_name);
    }
    res.render("save", {usersDishes, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/data', withAuth, async (req, res) => {
  try {
    const dishData = await Dish.findAll({
      where: {
        has_nuts: (req.query.hasNuts === 'true'),
        has_meat: (req.query.hasMeat === 'true'),
        has_dairy: (req.query.hasDairy === 'true'),
        has_soy: (req.query.hasSoy === 'true'),
        has_gluten: (req.query.hasGluten === 'true'),
        has_shellfish: (req.query.hasShellfish === 'true'),
        has_soy: (req.query.hasSoy === 'true'),
      },
    });

    const dishes = dishData.map((dish) => dish.get({ plain: true }));
    const index = Math.floor(Math.random() * dishes.length);
    const dish = dishes[index];

    console.log(dish);

    res.render('homepage', { dish, logged_in: true })

  } catch (err) {
    res.status(500).json(err);
  }
})

// login route -> if logged_in is true, sends user to homepage; otherwise renders login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
