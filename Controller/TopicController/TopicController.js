const Topic = require("../../Model/Topic.Model");

// Create a new topic
const createTopic = async (req, res) => {
  const {
    title,
    description,
    metaTitle,
    metadescription,
    chapterId,
    content,
    qna,
  } = req.body;

  try {
    const newTopic = new Topic({
      title,
      description,
      metaTitle,
      metadescription,
      chapterId,
      content,
      qna,
    });
    const savedTopic = await newTopic.save();
    res.status(201).json(savedTopic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all topics
const getTopics = async (req, res) => {
  try {
    const topics = await Topic.findById(req.params.id).populate('chapterId');
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single topic by ID
const getTopicById = async (req, res) => {
  try {
    const topic = await Topic.find({ chapterId: req.params.id }).populate(
      "chapterId"
    );
    if (topic) {
      res.status(200).json(topic);
    } else {
      res.status(404).json({ message: "Topic not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a topic by ID
const updateTopic = async (req, res) => {
  const { title, description, metaTitle, metadescription, content, qna } =
    req.body;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      req.params.id,
      { title, description, metaTitle, metadescription, content, qna },
      { new: true, runValidators: true }
    );

    if (updatedTopic) {
      res.status(200).json(updatedTopic);
    } else {
      res.status(404).json({ message: "Topic not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a topic by ID
const deleteTopic = async (req, res) => {
  try {
    const deletedTopic = await Topic.findByIdAndDelete(req.params.id);

    if (deletedTopic) {
      res.status(200).json({ message: "Topic deleted" });
    } else {
      res.status(404).json({ message: "Topic not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTopic,
  getTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
};
