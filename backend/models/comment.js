const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
  content: {
    type: String
  },
  dateTime: {
    type: Date
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

module.exports = mongoose.model('Comment', commentSchema);
