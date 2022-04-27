const express = require("express");
const router = express.Router();
const { validateToken } = require("../../middlewares/auth.middleware");

// Load Controllers
const { createLogin, getLogin, updateLogin, deleteLogin, destroyLogin } = require("../../controllers/admin/login.controller");

router.get("/get", validateToken, getLogin);
router.post("/create", validateToken, createLogin);
router.patch("/update/:id", validateToken, updateLogin);
router.patch("/delete/:id", validateToken, deleteLogin);
router.post("/destroy", validateToken, destroyLogin);

module.exports = router;
