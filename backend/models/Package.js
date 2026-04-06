const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a package name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  days: {
    type: Number,
    required: [true, 'Please specify the number of days']
  },
  price: {
    type: Number,
    required: [true, 'Please specify the price']
  },
  distanceKm: {
    type: Number,
    required: [true, 'Please specify the distance in km']
  },
  image: {
    type: String,
    default: 'no-photo.jpg'
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Package', packageSchema);
