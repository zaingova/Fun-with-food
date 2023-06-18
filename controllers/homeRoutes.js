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

// route for retrieving all saved dishes for a given user
router.get("/save", withAuth, async (req, res) => {
  try {
    // finds all dishes where the user_id is equal to the current user's user_id (retrieves all saved dishes for that user)
    const dishData = await User_Dish.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    // serializes this data to a new variable
    const usersDishes = dishData.map((user_dish) => user_dish.get({ plain: true }));

    // creates a new empty array
    let dishArray = [];

    // iterates through all saved dishes for this user
    for (let i = 0; i < usersDishes.length; i++) {
      // since the dishId for each dish aligns with the primary key of each dish, we use findByPk() and pass userDishes[current index].dishId
      let p = await Dish.findByPk(usersDishes[i].dishId, {});
      // add this dish to the empty array created earlier
      dishArray.push(p);
    }

    console.log(dishArray);

    // renders the 'save' view, passing the dishArray which contains all dishes saved for that user
    res.render("save", { dishArray, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
})

// route for retrieving all dishes with certain parameters -> utilizes query strings
router.get('/data', withAuth, async (req, res) => {
  try {
    // finds all dishes with query string data
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

    // serializes dish object
    const dishes = dishData.map((dish) => dish.get({ plain: true }));

    // selects a random dish from the list of dishes
    const index = Math.floor(Math.random() * dishes.length);
    const dish = dishes[index];

    const placeholder = {};

    // renders the homepage with ONE dish object passed to it
    if (dish)
      res.render('homepage', { dish, logged_in: true })
    else {
      res.render('homepage', { placeholder, logged_in: true });
    }

  } catch (err) {
    res.status(500).json(err);
  }
})

// wildcard route -> if user is logged in, redirects to homepage; otherwise redirects to login route
router.get("/*", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
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
