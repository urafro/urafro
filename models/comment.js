const mongoose = require("mongoose");

let CommentSchema = new mongoose.Schema({
  author: String,
  text: String
});

module.exports = mongoose.model("Comment", CommentSchema);