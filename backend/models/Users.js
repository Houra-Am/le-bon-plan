const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, require: true },
  name: { type: String, require: true },
  lastName: { type: String, require: true },
  password: { type: String, require: true, min: 6, max: 10 },
  city: { type: String, enum: ["Paris", "Lille", "Marseille"], require: true },
  profilePicture: String,
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
