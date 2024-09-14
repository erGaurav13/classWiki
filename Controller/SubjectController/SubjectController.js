const Subject = require("../../Model/Subject.Model");

// Create a new subject
const createSubject = async (req, res) => {
  const { name, description, classId } = req.body;
  console.log(name, description, classId);
  try {
    const newSubject = new Subject({ name, description, classId });
    const savedSubject = await newSubject.save();
    res.status(201).json(savedSubject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all subjects
const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find()
      .populate("classId")
       
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single subject by ID
const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id)
      .populate("classId")
      .populate("chapters");
    if (subject) {
      res.status(200).json(subject);
    } else {
      res.status(404).json({ message: "Subject not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a subject by ID
const updateSubject = async (req, res) => {
  const { name, description,classId } = req.body;

  try {
    

    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      { name, description ,classId},
      { new: true, runValidators: true }
    );

    if (updatedSubject) {
      res.status(200).json(updatedSubject);
    } else {
      res.status(404).json({ message: "Subject not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a subject by ID
const deleteSubject = async (req, res) => {
  try {
    const deletedSubject = await Subject.findByIdAndDelete(req.params.id);

    if (deletedSubject) {
      res.status(200).json({ message: "Subject deleted" });
    } else {
      res.status(404).json({ message: "Subject not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
};
