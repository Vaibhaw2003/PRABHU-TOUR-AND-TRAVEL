const express = require('express');
const {
  getPricings,
  createPricing,
  updatePricing
} = require('../controllers/pricingController');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getPricings)
  .post(protect, authorize('admin'), createPricing);

router
  .route('/:id')
  .put(protect, authorize('admin'), updatePricing);

module.exports = router;
