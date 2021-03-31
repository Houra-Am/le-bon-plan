const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  nameOfProduct: { type: String },
  description: {
    type: String,
    require: true,
  },
  locationOfProduct: { type: String, require: true },
  postedBy: { type: String, require: true },
  dateOfPost: { type: String, require: true },
  priceOfProduct: { type: String, require: true },
  productPicture: String,
});

const ProductsModel = mongoose.model("products", productsSchema);
module.exports = ProductsModel;
