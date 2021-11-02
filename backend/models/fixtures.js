const mongoose = require("mongoose");
const ProductsModel = require("./models/Products");
const UsersModel = require("./models/Users");

mongoose.connect("mongodb://localhost:27017/lebonplan", () => {
  console.log("DB connected");
});
