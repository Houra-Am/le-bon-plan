const express = require ("express");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const mongoose = require ("mongoose");
const cors = require ("cors");
const jwt = require("jsonwebtoken");
//const config = require("./config");
//const signUpModel = require ("./models/Signup");
const port = 8000;
const app = express();


app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log("server connected on port " + port);
})

mongoose.connect("mongodb://localhost:27017/lebonplan", {useNewUrlParser: true, useUnifiedTopology: true},
() => {
    console.log("DB connected");
});
