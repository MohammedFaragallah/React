let mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
  text: {
    type: String,
    default: 'defaultString',
  },
  author: {
    type: String,
    default: 'defaultAuthor',
  },
});

module.exports = mongoose.model('comment', commentSchema);
