const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 10,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
