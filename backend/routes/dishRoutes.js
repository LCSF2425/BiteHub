const express = require("express");
const router = express.Router();
const { verifyToken, verifyAdmin } = require("../middleware/auth");
const { addDish } = require("../controllers/dishController");

// Admin: Add dish to a restaurant
router.post("/:restaurantId", verifyToken, verifyAdmin, addDish);

module.exports = router;
