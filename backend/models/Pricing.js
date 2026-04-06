const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Please add a category (e.g., Local, Long Trip, Weekly)'],
    unique: true
  },
  minKm: {
    type: Number,
    required: [true, 'Please add minimum kilometers']
  },
  ratePerKm: {
    type: Number,
    required: [true, 'Please add rate per kilometer']
  },
  approxCost: {
    type: Number,
    required: [true, 'Please add an approximate base cost']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pricing', pricingSchema);
