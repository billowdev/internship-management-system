const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/auth.middleware");
// Load Controllers
const { getInternshipsPending,getInternshipsConfirm, getInternshipsByDirector} = require("../controllers/directors.controller");

router.get("/get/internships/pending", validateToken, getInternshipsPending);
router.get("/get/internships/confirm", validateToken, getInternshipsConfirm);
router.get("/get/internships/detail/:id", validateToken, getInternshipsByDirector);
// router.patch("/update", validateToken, updateStudents);


module.exports = router;
