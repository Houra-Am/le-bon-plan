const mongoose = require("mongoose");

const productsSchema = new Mongoose.Schema({
    nameOfProduct: {Type: String, required = true},
    description: {Type: String, required = true},
    locationOfProduct: {Type: String, required = true},
    postedBy: {Type: String, required = true},
    dateOfPost: {Type: Date, required = true},
    priceOfProduct: {Type: Number, required = true}
});

const productsModel = mongoose.model("products", productsSchema);
module.exports = productsModel;