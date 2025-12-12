const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    ratings: {
      type: Number, // individual item rating
      min: 0,
      max: 5,
    },
    avgRating: {
      type: Number, // avg rating for that item
      min: 0,
      max: 5,
    },
  },
  { _id: false } // items don't need their own ObjectId
);

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    avgRating: {
      type: Number,
      min: 0,
      max: 5,
    },
    avgPrice: {
      type: Number, // average meal price
    },
    deliveryTime: {
      type: String, // "25-30 mins"
    },
    items: [itemSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
