const router = require("express").Router();
const userDish = require("../../models/User_Dish");

router.get("/", async(req, res) => {
    try {
        const userdishData = await userDish.findAll();
        res.status(200).json(userDishdishData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async(req, res) => {
    try {
        const userdishData = await userDish.fidnByPk(req.params.id);
        if (!userdishData) {
            res.status(404).json({message: "No dish found with the user"});
            return;
        }
        res.status(200).json(userdishData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;