const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/auth.middleware")

// Load Controllers

const { uploadFiles } = require("../controllers/upload.controller");


router.post("/student/profile", validateToken, uploadFiles);

module.exports = router;
