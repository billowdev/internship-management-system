const express = require("express");
const router = express.Router();
const { validateToken } = require("../middlewares/auth.middleware");
// Load Controllers
const { getInternshipsPending, getInternshipsConfirm, getInternshipsByDirector, confirmInternship, unConfirmInternship, returnInternship } = require("../controllers/directors.controller");

router.get("/get/internships/pending", validateToken, getInternshipsPending);
router.get("/get/internships/confirm", validateToken, getInternshipsConfirm);
router.get("/get/internships/detail/:id", validateToken, getInternshipsByDirector);
router.patch("/confirm/internships", validateToken, confirmInternship);
router.patch("/unconfirm/internships", validateToken, unConfirmInternship);
router.patch("/return/internships", validateToken, returnInternship);


// router.patch("/update", validateToken, updateStudents);


module.exports = router;
