const router = require("express").Router();
const { Dish, User, User_Dish } = require("../models");
const withAuth = require("../utils/auth");

// default route to homepage -> requires authorization and also sends back logged_in status in render()
router.get("/", async (req, res) => {
  try {
    res.render("homepage", { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(404).json(err);
  }
});

// router.get("/dish", async (req, res) => {
//   try {

//     const dishes = Dish.findAll(req.body, {
//       where: {
//         has_nuts: req.body,
//       },
//     });

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// login route -> if logged_in is true, sends user to homepage; otherwise renders login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  console.log("help");
  res.render("login");
});

module.exports = router;
