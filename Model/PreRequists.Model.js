const mongoose = require('mongoose');

const prerequisiteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true,
  },
});

const Prerequisite = mongoose.model('Prerequisite', prerequisiteSchema);

module.exports = Prerequisite;
