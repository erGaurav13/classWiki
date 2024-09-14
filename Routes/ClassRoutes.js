const express = require('express');
const {
  createClass,deleteClass,getClassById,updateClass,getClasses
} = require('../Controller/ClassController/ClassController');

const router = express.Router();

// @route   POST /api/subjects
// @desc    Create a new subject
// @access  Public
router.post('/', createClass);

// @route   GET /api/subjects
// @desc    Get all subjects
// @access  Public
router.get('/', getClasses);

// @route   GET /api/subjects/:id
// @desc    Get a single subject by ID
// @access  Public
router.get('/:id', getClassById);

// @route   PUT /api/subjects/:id
// @desc    Update a subject by ID
// @access  Public
router.put('/:id', updateClass);

// @route   DELETE /api/subjects/:id
// @desc    Delete a subject by ID
// @access  Public
router.delete('/:id', deleteClass);

module.exports = router;
