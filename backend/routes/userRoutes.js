const express = require('express');
const {
  getUsers,
  deleteUser
} = require('../controllers/userController');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect);
router.use(authorize('admin')); // Restrict all paths below to admin

router
  .route('/')
  .get(getUsers);

router
  .route('/:id')
  .delete(deleteUser);

module.exports = router;
