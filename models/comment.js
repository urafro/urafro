const mongoose = require("mongoose");

let CommentSchema = new mongoose.Schema({
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String,
    avatarUrl: String
  },
  text: String,
  replies: []
});

module.exports = mongoose.model("Comment", CommentSchema);