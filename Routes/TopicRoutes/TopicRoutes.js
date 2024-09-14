const express = require("express");
const router = express.Router();
const {
  createTopic,
  getTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
} = require("../../Controller/TopicController/TopicController"); // Adjust path if necessary

// Create a new topic
router.post("/", createTopic);

// Get all topics
router.get("/topicId/:id", getTopics);

// Get a single topic by ID
router.get("/:id", getTopicById);

// Update a topic by ID
router.put("/:id", updateTopic);

// Delete a topic by ID
router.delete("/:id", deleteTopic);

module.exports = router;
