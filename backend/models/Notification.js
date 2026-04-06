const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a notification title']
  },
  message: {
    type: String,
    required: [true, 'Please add a notification message']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Notification', notificationSchema);
