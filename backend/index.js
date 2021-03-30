const express = require("express");
const bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/Users");

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log("server ready " + port);
});

mongoose.connect(
  "mongodb://localhost:27017/lebonplan",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

app.post("/signup", async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await UserModel.findOne({
      username: req.body.username,
    });
    if (user) {
      res.status(400).send(`username ${req.body.email} already exists`);
      return;
    }
    await UserModel.create({
      userName: req.body.userName,
      name: req.body.name,
      lastName: req.body.lastName,
      password: req.body.password,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
  }
});
