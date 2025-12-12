const Restaurant = require("../models/Restaurant");

// ✅ Create restaurant (with items if provided)
exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all restaurants (HOME PAGE)
exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().select(
      "name location image avgRating avgPrice deliveryTime"
    );

    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get restaurant by ID (DETAIL PAGE + ITEMS)
exports.getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant)
      return res.status(404).json({ message: "Restaurant not found" });

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Add item to restaurant (push into items array)
exports.addItemToRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant)
      return res.status(404).json({ message: "Restaurant not found" });

    restaurant.items.push(req.body);
    await restaurant.save();

    res.status(201).json({
      message: "Item added successfully",
      items: restaurant.items
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
