const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  resources: [
    {
      type: String,
    },
  ],
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true,
  },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
