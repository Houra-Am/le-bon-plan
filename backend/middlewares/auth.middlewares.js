const UserModel = require("../models/Users");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../utils/auth.utils");

module.exports = async (req, res, next) => {
  const simpleToken = req.headers.authorization.split(" ")[1];
  const decodedToken = verifyToken(simpleToken);
  const user = await UserModel.findOne({
    userName: decodedToken.userName,
  });

  if (user) {
    req.someone = user;
    next();
  } else {
    res.status(400).sen(err);
  }
};
