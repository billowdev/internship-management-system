const express = require("express");
const router = express.Router();
const { getInternships } = require("../controllers/internships.controller");


// Load Controllers
router.get("/get", getInternships);


module.exports = router;
