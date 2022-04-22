const express = require("express");
const router = express.Router();
const {  } = require("../controllers/students.controller");

// Load Controllers
router.get("/get/geographies/all");
router.get("/get/provinces/:geographyId");
router.get("/get/districts/:provinceId");
router.get("/get/sub-districts/:districtId");


module.exports = router;
