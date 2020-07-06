const mongoose = require("mongoose");
const LocalStrategyMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  avatarUrl: String,
  bio: String,
  password: String
});

UserSchema.plugin(LocalStrategyMongoose);

module.exports = mongoose.model("User", UserSchema);