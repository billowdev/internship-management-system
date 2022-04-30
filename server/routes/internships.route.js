const express = require("express");
const router = express.Router();
const { getInternships, getInternshipsByStudents, updateInternship, unsendInternship,  sendInternship } = require("../controllers/internships.controller");
const { validateToken } = require("../middlewares/auth.middleware")

// Load Controllers
router.get("/get/all", getInternships);
// router.get("/get/:byStudentId", getInternshipsByStudentId);

// student flow
router.get("/get/information", validateToken, getInternshipsByStudents);
router.patch("/update/information", validateToken, updateInternship);
router.patch("/send", validateToken, sendInternship);
router.patch("/unsend", validateToken, unsendInternship);

module.exports = router;
