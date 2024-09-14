const Chapter = require("../../Model/Chapter.Model");

// Create a new chapter
const createChapter = async (req, res) => {
  const { title, description, subjectId } = req.body;

  try {
    const newChapter = new Chapter({ title, description, subjectId });
    const savedChapter = await newChapter.save();
    res.status(201).json(savedChapter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all chapters
const getChaptersBySubjectId = async (req, res) => {
  const { id: subjectId } = req.params;
  console.log(subjectId)
  try {
    const chapters = await Chapter.find({ subjectId: subjectId })
      .populate("subjectId")
      
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single chapter by ID
const getChapterById = async (req, res) => {
  try {
    const chapter = await Chapter.findById(req.params.id)
      .populate("subjectId")
      .populate("topics");
    if (chapter) {
      res.status(200).json(chapter);
    } else {
      res.status(404).json({ message: "Chapter not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a chapter by ID
const updateChapter = async (req, res) => {
  const { title, description } = req.body;

  try {
    const updatedChapter = await Chapter.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true, runValidators: true }
    );

    if (updatedChapter) {
      res.status(200).json(updatedChapter);
    } else {
      res.status(404).json({ message: "Chapter not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a chapter by ID
const deleteChapter = async (req, res) => {
  try {
    const deletedChapter = await Chapter.findByIdAndDelete(req.params.id);

    if (deletedChapter) {
      res.status(200).json({ message: "Chapter deleted" });
    } else {
      res.status(404).json({ message: "Chapter not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createChapter,
  getChaptersBySubjectId,
  getChapterById,
  updateChapter,
  deleteChapter,
};
