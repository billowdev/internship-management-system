const express = require("express");
const router = express.Router();
const { validateToken } = require("../../middlewares/auth.middleware");
const { createLogin, getLogin} = require("../../controllers/admin/login.controller");
// Load Controllers
router.post("/create", validateToken, createLogin);
router.get("/get", validateToken, getLogin);



module.exports = router;
