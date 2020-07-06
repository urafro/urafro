const mongoose = require("mongoose");
const LocalStrategyMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    firstName: String,
    lastName: String
  },
  avatarUrl: String,
  password: String
});

UserSchema.plugin(LocalStrategyMongoose);

module.exports = mongoose.model("User", UserSchema);