const Package = require('../models/Package');

// @desc    Get all packages
// @route   GET /api/packages
// @access  Public
exports.getPackages = async (req, res, next) => {
  try {
    let query;

    // Copy req.query
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit', 'search'];
    removeFields.forEach(param => delete reqQuery[param]);

    // Create query string
    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    // Finding resource
    query = Package.find(JSON.parse(queryStr));

    // Search by name
    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, 'i');
      query = query.find({ name: searchRegex });
    }

    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }

    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Package.countDocuments();

    query = query.skip(startIndex).limit(limit);

    // Executing query
    const packages = await query;

    // Pagination result
    const pagination = {};
    if (endIndex < total) {
      pagination.next = { page: page + 1, limit };
    }
    if (startIndex > 0) {
      pagination.prev = { page: page - 1, limit };
    }

    res.status(200).json({
      success: true,
      count: packages.length,
      pagination,
      data: packages
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single package
// @route   GET /api/packages/:id
// @access  Public
exports.getPackage = async (req, res, next) => {
  try {
    const tourPackage = await Package.findById(req.params.id);

    if (!tourPackage) {
      return res.status(404).json({ success: false, error: 'Package not found' });
    }

    res.status(200).json({ success: true, data: tourPackage });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new package
// @route   POST /api/packages
// @access  Private/Admin
exports.createPackage = async (req, res, next) => {
  try {
    // Check if image was uploaded
    if (req.file) {
      req.body.image = req.file.path.replace(/\\/g, '/'); // Normalize path for windows
    }

    const tourPackage = await Package.create(req.body);

    res.status(201).json({ success: true, data: tourPackage });
  } catch (err) {
    next(err);
  }
};

// @desc    Update package
// @route   PUT /api/packages/:id
// @access  Private/Admin
exports.updatePackage = async (req, res, next) => {
  try {
    let tourPackage = await Package.findById(req.params.id);

    if (!tourPackage) {
      return res.status(404).json({ success: false, error: 'Package not found' });
    }

    if (req.file) {
      req.body.image = req.file.path.replace(/\\/g, '/');
    }

    tourPackage = await Package.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({ success: true, data: tourPackage });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete package
// @route   DELETE /api/packages/:id
// @access  Private/Admin
exports.deletePackage = async (req, res, next) => {
  try {
    const tourPackage = await Package.findById(req.params.id);

    if (!tourPackage) {
      return res.status(404).json({ success: false, error: 'Package not found' });
    }

    await tourPackage.deleteOne();

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
