const mongoose = require('mongoose');

const addvegSchema = new mongoose.Schema({
  vegName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

// Create the Vegetable model
const Addvegetable = mongoose.model("Addvegetable", addvegSchema);

module.exports = Addvegetable;
