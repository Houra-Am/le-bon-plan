const express = require ("express");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const mongoose = require ("mongoose");
const cors = require ("cors");
const jwt = require("jsonwebtoken");
const config = require("./config");
//const productsModel = require ("./models/products");
//const port = 8000;
const app = express();


app.use(bodyParser.json());
app.use(cors());

app.listen(config.port, () => {
    console.log("server connected on port " + config.port);
})

mongoose.connect(config.mongoDB, {useNewUrlParser: true, useUnifiedTopology: true},
() => {
    console.log("DB connected");
});
