jwt = require("jsonwebtoken");
const UserModel = require("../models/Users");

async function admin(req, res, next) {
  try {
    const users = await UserModel.find().select("userName");
    console.log(users);
    res.json({ data: users });
  } catch (err) {
    console.log(err);
    res.status(403).json({ isNotConnected: true });
  }
}

async function userDetail(req, res, next) {
  try {
    const username = req.params.userName;
    const user = await UserModel.findOne({ username: username }).lean();
    if (!user) {
      return res.status(404).json({});
    }
    console.log(user);
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

module.exports = {
  admin: admin,
  userDetail: userDetail,
};
