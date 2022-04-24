const express = require("express");
const router = express.Router();
const { getInternships, getInternshipsByStudents, getInternshipsUpdate } = require("../controllers/internships.controller");
const { validateToken } = require("../middlewares/auth.middleware")

// Load Controllers
router.get("/get/all", getInternships);
// router.get("/get/:byStudentId", getInternshipsByStudentId);

// student flow
router.get("/get/information", validateToken, getInternshipsByStudents);
router.patch("/get/information/update", validateToken, getInternshipsUpdate);

module.exports = router;
