const express = require("express");
const router = express.Router();
const { createStudents, getStudents, updateStudents, deleteStudents } = require("../controllers/students.controller");

// Load Controllers
router.get("/get/all", getStudents);


module.exports = router;
