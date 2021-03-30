const jwt = require("jsonwebtoken");
const jwtsecret = "thisIsASecret";

function generateToken(user) {
  return jwt.sign({ userName }, jwtsecret, {
    expiresIn: 3600,
  });
}

function verifyToken(token) {
  return jwt.verify(token, jwtsecret);
}

module.exports = {
  generateToken,
  verifyToken,
};
