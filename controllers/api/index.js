const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const dishRoutes = require("./userRoutes.js");
const userdishRoutes = require("./userdishRoutes.js");

router.use("/user", userRoutes);
router.use("/dish", dishRoutes);
router.use("/userdish", userdishRoutes);

module.exports = router;
