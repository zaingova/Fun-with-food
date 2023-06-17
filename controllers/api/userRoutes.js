// Import router
const router = require("express").Router();
// Import user model
const User = require("../../models/User");
const Dish = require("../../models/Dish");

// User login
router.post("/signup", async (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((userData) => {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: "You are now logged in!" });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", async (req, res) => {
  try {
    // Check for email
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {

      res.status(400).json({ message: "Fail to login, wrong email or password please try again" });

      return;
    }
    // Check for password
    const validPassword = await userData.checkPassword(req.body.password);
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

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
