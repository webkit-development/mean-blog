const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
    required: false
  }]
});


module.exports = mongoose.model('Post', postSchema);
