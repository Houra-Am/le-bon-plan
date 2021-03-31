const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload.controllers");
const multer = require("multer");
const upload = multer({ dest: "public/" });

router.post("/", upload.single("profilePicture"), uploadController.upload);

module.exports = router;
