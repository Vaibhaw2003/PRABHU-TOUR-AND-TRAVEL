const express = require('express');
const {
  createBooking,
  getBookings,
  updateBookingStatus,
  createGuestBooking
} = require('../controllers/bookingController');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Guest booking - no auth required (must be BEFORE protect middleware)
router.post('/guest', createGuestBooking);

// Protected routes below
router.use(protect);

router
  .route('/')
  .post(createBooking)
  .get(getBookings);

router
  .route('/:id/status')
  .put(authorize('admin'), updateBookingStatus);

module.exports = router;
