const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config");

const cors = require("cors");
const authRoutes = require("./routes/auth.route");
const adminRoutes = require("./routes/admin.route");
const uploadRoutes = require("./routes/upload.route");

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

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/upload", uploadRoutes);

app.listen(config.port, () => {
  console.log("server ready " + config.port);
});
