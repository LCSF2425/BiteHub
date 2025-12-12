const express = require("express");
const router = express.Router();

const {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  addItemToRestaurant
} = require("../controllers/restaurantController");

const { verifyToken, verifyAdmin } = require("../middleware/auth.middleware");

// ✅ Create restaurant
router.post("/", verifyToken, verifyAdmin, createRestaurant);

// ✅ Home page – list restaurants
router.get("/", getRestaurants);

// ✅ Restaurant detail + items
router.get("/:id", getRestaurantById);

// ✅ Add item inside restaurant
router.post("/:id/items", verifyToken, verifyAdmin, addItemToRestaurant);

module.exports = router;
