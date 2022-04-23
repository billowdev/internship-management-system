const express = require("express");
const router = express.Router();
const { getGeographies, getProvincesByGeographyId, getDistrictsByProvinceId, getSubDistrictsByDistrictId, getSubDistrictsById } = require("../controllers/thaiAddresses.controller");

// Load Controllers
router.get("/", getGeographies);
router.get("/get/geographies/all", getGeographies);
router.get("/get/provinces/:geographyId", getProvincesByGeographyId);
router.get("/get/districts/:provinceId", getDistrictsByProvinceId);
router.get("/get/sub-districts/:districtId", getSubDistrictsByDistrictId);
router.get("/get/sub-districts/ById/:id", getSubDistrictsById);


module.exports = router;
