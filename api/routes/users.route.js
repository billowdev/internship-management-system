const express = require("express");
const router = express.Router();
const { getUsers} = require("../controllers/users.controller");
const { validateToken } = require("../middlewares/auth.middleware");

// Load Controllers
router.get("/get/all", getUsers);


module.exports = router;
