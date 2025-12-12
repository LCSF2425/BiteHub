const Dish = require("../models/Dish");
const Restaurant = require("../models/Restaurant");

// Admin: Add dish to restaurant
exports.addDish = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const dish = await Dish.create({ ...req.body, restaurant: restaurantId });

    // Add dish to restaurant
    const restaurant = await Restaurant.findById(restaurantId);
    restaurant.dishes.push(dish._id);
    await restaurant.save();

    res.status(201).json(dish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
