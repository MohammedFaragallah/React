let mongoose = require('mongoose');

let campSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comment',
    },
  ],
});

module.exports = mongoose.model('camps', campSchema);
