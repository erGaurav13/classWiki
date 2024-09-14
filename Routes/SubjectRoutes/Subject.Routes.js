const express = require('express');
const {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
} = require('../../Controller/SubjectController/SubjectController');

const router = express.Router();

// @route   POST /api/subjects
// @desc    Create a new subject
// @access  Public
router.post('/', createSubject);

// @route   GET /api/subjects
// @desc    Get all subjects
// @access  Public
router.get('/', getSubjects);

// @route   GET /api/subjects/:id
// @desc    Get a single subject by ID
// @access  Public
router.get('/:id', getSubjectById);

// @route   PUT /api/subjects/:id
// @desc    Update a subject by ID
// @access  Public
router.put('/:id', updateSubject);

// @route   DELETE /api/subjects/:id
// @desc    Delete a subject by ID
// @access  Public
router.delete('/:id', deleteSubject);

module.exports = router;
