const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
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
