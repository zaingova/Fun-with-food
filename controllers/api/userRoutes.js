// import router
const router = require("express").Router();

// import user model
const User = require("../../models/User");
const Dish = require("../../models/Dish");

// import login authorization helper
const withAuth = require('../../utils/auth');

// signup route
router.post("/signup", async (req, res) => {
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  };
});

// login route
router.post("/login", async (req, res) => {
  try {
    // Check for email
    const userData = await User.findOne({ where: { email: req.body.email } });

    // if no user with that email exists...
    if (!userData) {
      res.status(400).json({ message: "Fail to login, wrong email or password please try again" });
      return;
    }

    // Check for password
    const validPassword = await userData.checkPassword(req.body.password);

    // if that password doesn't exist in the database...
    if (!validPassword) {
      res.status(400).json({ message: "Fail to login, wrong email or password, please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: "You are now loged in!" });
    })

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout route (withAuth isn't requireed for this but its there just in case something else goes wrong)
router.post("/logout", withAuth, (req, res) => {
  // if we are currently logged in... (its not actually possible to get to this route while logged out unless the url is entered manually)
  if (req.session.logged_in) {
    // destroy the session
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
