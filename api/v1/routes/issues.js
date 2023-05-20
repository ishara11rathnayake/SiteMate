const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        res.status(200).json({
            message: "It works!"
        });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
