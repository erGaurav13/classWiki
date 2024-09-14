const Class = require('../../Model/Class.Model');

// Create a new class
const createClass = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newClass = new Class({ name, description });
    const savedClass = await newClass.save();
    res.status(201).json(savedClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all classes
const getClasses = async (req, res) => {
    try {
      const classes = await Class.find().populate('subjects');
      res.status(200).json(classes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Get a single class by ID
  const getClassById = async (req, res) => {
    try {
      const classObj = await Class.findById(req.params.id).populate('subjects');
      if (classObj) {
        res.status(200).json(classObj);
      } else {
        res.status(404).json({ message: 'Class not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Update a class by ID
const updateClass = async (req, res) => {
    const { name, description } = req.body;
  
    try {
      const updatedClass = await Class.findByIdAndUpdate(
        req.params.id,
        { name, description },
        { new: true, runValidators: true }
      );
  
      if (updatedClass) {
        res.status(200).json(updatedClass);
      } else {
        res.status(404).json({ message: 'Class not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete a class by ID
const deleteClass = async (req, res) => {
    try {
      const deletedClass = await Class.findByIdAndDelete(req.params.id);
  
      if (deletedClass) {
        res.status(200).json({ message: 'Class deleted' });
      } else {
        res.status(404).json({ message: 'Class not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = { createClass, getClasses, getClassById, updateClass, deleteClass };
  