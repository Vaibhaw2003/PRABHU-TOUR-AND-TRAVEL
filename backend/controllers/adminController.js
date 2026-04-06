const Booking = require('../models/Booking');
const Package = require('../models/Package');
const User = require('../models/User');

// @desc    Get dashboard statistics
// @route   GET /api/admin/stats
// @access  Private/Admin
exports.getStats = async (req, res, next) => {
  try {
    const totalBookings = await Booking.countDocuments();
    
    // Calculate total revenue from confirmed bookings
    const confirmedBookings = await Booking.find({ status: { $in: ['confirmed', 'pending'] } });
    const totalRevenue = confirmedBookings.reduce((acc, curr) => acc + curr.totalAmount, 0);
    
    const totalUsers = await User.countDocuments({ role: 'user' });
    const activePackages = await Package.countDocuments();

    res.status(200).json({
      success: true,
      data: {
        totalBookings,
        totalRevenue,
        totalUsers,
        activePackages
      }
    });
  } catch (err) {
    next(err);
  }
};
