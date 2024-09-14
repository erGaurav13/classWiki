const mongoose = require('mongoose');

const doubtSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true,
  },
});

const Doubt = mongoose.model('Doubt', doubtSchema);

module.exports = Doubt;
