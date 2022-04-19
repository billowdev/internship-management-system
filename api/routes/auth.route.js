const express = require("express");
const router = express.Router();

const { signupController, signinController } = require("../controllers/auth.controllers");
const { validateToken } = require("../middlewares/auth.middleware");

// Load Controllers
router.post("/signup", signupController);
router.post("/signin", signinController);

router.get("/is-auth", validateToken, (req,res)=>{
	res.json(req.user)
})

module.exports = router;