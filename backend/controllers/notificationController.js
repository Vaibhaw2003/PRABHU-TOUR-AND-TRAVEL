const Notification = require('../models/Notification');

// @desc    Get all notifications
// @route   GET /api/notifications
// @access  Public (or Private based on needs)
exports.getNotifications = async (req, res, next) => {
  try {
    // Return latest 10 notifications
    const notifications = await Notification.find().sort('-createdAt').limit(10);

    res.status(200).json({ success: true, count: notifications.length, data: notifications });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a notification
// @route   POST /api/notifications
// @access  Private/Admin
exports.createNotification = async (req, res, next) => {
  try {
    const notification = await Notification.create(req.body);

    res.status(201).json({ success: true, data: notification });
  } catch (err) {
    next(err);
  }
};
