const express = require("express");
const router = express.Router();
const { validateToken } = require("../../middlewares/auth.middleware");
// Load Controllers
const { getStudents, updateStudents } = require("../../controllers/admin/admin.students.controller");

router.get("/get/:id", validateToken, getStudents);
router.patch("/update/:id", validateToken, updateStudents);


module.exports = router;
