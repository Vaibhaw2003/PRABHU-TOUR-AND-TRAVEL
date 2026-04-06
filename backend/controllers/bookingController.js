const Booking = require('../models/Booking');
const Package = require('../models/Package');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
exports.createBooking = async (req, res, next) => {
  try {
    // Add user to req.body
    req.body.user = req.user.id;

    const { packageId, name, phone, travelDate } = req.body;

    // Check if package exists
    const tourPackage = await Package.findById(packageId);

    if (!tourPackage) {
      return res.status(404).json({ success: false, error: 'Package not found' });
    }

    req.body.package = packageId;
    req.body.totalAmount = tourPackage.price; // or calculate based on options

    const booking = await Booking.create(req.body);

    res.status(201).json({ success: true, data: booking });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all bookings (Admin gets all, user gets their own)
// @route   GET /api/bookings
// @access  Private
exports.getBookings = async (req, res, next) => {
  try {
    let query;

    if (req.user.role === 'admin') {
      query = Booking.find().populate('package', 'name price image').populate('user', 'name email');
    } else {
      query = Booking.find({ user: req.user.id }).populate('package', 'name price image');
    }

    const bookings = await query;

    res.status(200).json({ success: true, count: bookings.length, data: bookings });
  } catch (err) {
    next(err);
  }
};

// @desc    Update booking status
// @route   PUT /api/bookings/:id/status
// @access  Private/Admin
exports.updateBookingStatus = async (req, res, next) => {
  try {
    let booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }

    booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: booking });
  } catch (err) {
    next(err);
  }
};

// @desc    Create guest booking (no login required)
// @route   POST /api/bookings/guest
// @access  Public
exports.createGuestBooking = async (req, res, next) => {
  try {
    const { name, phone, travelDate, packageTitle, totalAmount } = req.body;

    // Validate required fields
    if (!name || !phone || !travelDate) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, phone number, and travel date'
      });
    }

    const booking = await Booking.create({
      name,
      phone,
      travelDate,
      packageTitle: packageTitle || 'Custom Booking',
      totalAmount: totalAmount || 0,
      status: 'pending'
    });

    res.status(201).json({ success: true, data: booking });
  } catch (err) {
    next(err);
  }
};
