const UserModel = require("../models/Users");
const ProductsModel = require("../models/Products");
const fs = require("fs"),
  path = require("path");

module.exports.upload = async (req, res, next) => {
  try {
    console.log(req.file);
    fs.renameSync(
      req.file.path,
      path.join(req.file.destination, req.file.originalname)
    );
    res.json({
      imageUrl: `http://localhost:4000/${req.file.originalname}`,
    });
    res.send("OK");
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};
