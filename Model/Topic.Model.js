const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  metaTitle: {
    type: String,
  },
  metadescription: {
    type: String,
  },
  chapterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
    required: true,
  },

  content: {
    type: String,
  },
  qna: [],
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
