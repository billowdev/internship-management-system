const express = require("express");
const router = express.Router();
const { 
	getGeographies, 
	getProvinces, 
	getProvincesByGeographyId, 
	getDistrictsByProvinceId, 
	getSubDistrictsByDistrictId, 
	getSubDistrictsById,
	getDistricts,
	getSubDistricts
} = require("../controllers/thaiAddresses.controller");

// Load Controllers
router.get("/get/provinces/all", getProvinces);
router.get("/get/geographies/all", getGeographies);
router.get("/get/districts/all", getDistricts);
router.get("/get/sub-districts/all", getSubDistricts);
router.get("/get/provinces/:geographyId", getProvincesByGeographyId);
router.get("/get/districts/:provinceId", getDistrictsByProvinceId);
router.get("/get/sub-districts/:districtId", getSubDistrictsByDistrictId);
router.get("/get/sub-districts/ById/:id", getSubDistrictsById);


module.exports = router;
