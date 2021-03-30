const mongoose = require("mongoose");

const productsSchema = new Mongoose.Schema({
    nameOfProduct: String,
    description: String,
    locationOfProduct: String,
    postedBy: String,
    dateOfPost: Date
});

const productsModel = mongoose.model("products", productsSchema);
module.exports = productsModel;