const mongoose = require("mongoose");

let CommentSchema = new mongoose.Schema({
  author: {
    firstName: String,
    lastName: String
  },
  text: String
});

module.exports = mongoose.model("Comment", CommentSchema);