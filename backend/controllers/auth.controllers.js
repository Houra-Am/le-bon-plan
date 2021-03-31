const { generateToken } = require("../utils/auth.utils");
const UserModel = require("../models/Users");

module.exports.signup = async (req, res, next) => {
  try {
    const body = req.body;
    const newUser = await UserModel.create(body);
    console.log(newUser.userName);
    const token = generateToken(newUser.userName);
    res.status(200).json({ message: "You are now registered!", token: token });
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await UserModel.findOne({
      userName: body.userName,
    });
    if (!user) {
      return res.status(404).send("The user was not found");
    }
    if (user.password !== body.password) {
      return res.status(401).json("Password invalid");
    }
    const token = generateToken(user.userName);
    return res.status(200).json({ message: "You are logged in", token: token });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      isNotConnected: true,
    });
  }
};
