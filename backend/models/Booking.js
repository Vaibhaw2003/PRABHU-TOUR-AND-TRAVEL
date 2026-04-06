const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    default: null  // Allow guest bookings
  },
  package: {
    type: mongoose.Schema.ObjectId,
    ref: 'Package',
    default: null  // Optional if guest provides packageTitle
  },
  packageTitle: {
    type: String,
    default: ''  // For guest bookings without a package ObjectId
  },
  name: {
    type: String,
    required: [true, 'Please add a name for the booking']
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number']
  },
  travelDate: {
    type: Date,
    required: [true, 'Please specify the travel date']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);
