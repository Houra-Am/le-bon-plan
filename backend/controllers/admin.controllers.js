jwt = require("jsonwebtoken");
const UserModel = require("../models/Users");

module.exports.admin = async (req, res, next) => {
  try {
    const users = await UserModel.find().select("userName name lastName");
    console.log(users);
    res.json({ data: users });
  } catch (err) {
    console.log(err);
    res.status(403).json({ isNotConnected: true });
  }
};
