const express = require("express");
const router = express.Router();
const { validateToken } = require("../../middlewares/auth.middleware");

// Load Controllers
const { createLogin, getLogin, updateLogin, deleteLogin, destroyLogin, getLoginAccount} = require("../../controllers/admin/login.controller");

router.get("/get", validateToken, getLogin);
router.get("/get/:id", validateToken, getLoginAccount);
router.post("/create", validateToken, createLogin);
router.post("/destroy", validateToken, destroyLogin);
router.patch("/update/:id", validateToken, updateLogin);
router.delete("/delete/:id", validateToken, deleteLogin);

module.exports = router;
