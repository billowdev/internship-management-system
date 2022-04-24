const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/auth.middleware");
// Load Controllers
const { createStudents, getStudents, updateStudents, deleteStudents } = require("../controllers/students.controller");

router.get("/get", validateToken, getStudents);


module.exports = router;
