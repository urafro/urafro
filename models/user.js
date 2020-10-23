const mongoose = require("mongoose");
const LocalStrategyMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  avatarUrl: String,
  bio: String,
  password: String,
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Blog"
  }],
  drafts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Draft"
  }]
});

UserSchema.plugin(LocalStrategyMongoose);

module.exports = mongoose.model("User", UserSchema);