const Pricing = require('../models/Pricing');

// @desc    Get all pricing categories
// @route   GET /api/pricing
// @access  Public
exports.getPricings = async (req, res, next) => {
  try {
    const pricings = await Pricing.find();

    res.status(200).json({ success: true, count: pricings.length, data: pricings });
  } catch (err) {
    next(err);
  }
};

// @desc    Add new pricing category
// @route   POST /api/pricing
// @access  Private/Admin
exports.createPricing = async (req, res, next) => {
  try {
    const pricing = await Pricing.create(req.body);

    res.status(201).json({ success: true, data: pricing });
  } catch (err) {
    next(err);
  }
};

// @desc    Update pricing category
// @route   PUT /api/pricing/:id
// @access  Private/Admin
exports.updatePricing = async (req, res, next) => {
  try {
    let pricing = await Pricing.findById(req.params.id);

    if (!pricing) {
      return res.status(404).json({ success: false, error: 'Pricing not found' });
    }

    pricing = await Pricing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ success: true, data: pricing });
  } catch (err) {
    next(err);
  }
};
