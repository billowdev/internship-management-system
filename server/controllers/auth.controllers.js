const bcrypt = require("bcrypt");
const { createTokens } = require("../middlewares/AuthMiddleware");
const { sign, verify } = require("jsonwebtoken");
const { Users } = require("../models");


exports.signinController = async (req, res) => {
	try {
	  const { stdId, password } = req.body;
	  // validate user input
	  if (!(stdId && password)) {
		res.status(400).send("All input is required");
	  }
  
	  const user = await Users.findOne({ where: { stdId } });
  
	  if (user && (await bcrypt.compare(password, user.password))) {
		// create token
		const accessToken = sign(
		  {
			id: user.id,
			stdId: user.stdId,
			permission: user.permission,
		  },
		  process.env.JWT_SECRET,
		  {
			expiresIn: "168h",
		  }
		);
  
		res.cookie("access-token", accessToken, {
		  maxAge: 60 * 60 * 24 * 7 * 1000,
		  httpOnly: true,
		});

		// save user token
		// user.accessToken = accessToken;
		return res.status(200).json({
		  id: user.id,
		  token: accessToken,
		  stdId: user.stdId,
		  permission: user.permission,
		});
	  } else {
		return res.status(400).json({success:false, msg:"Invalid Credentials"});
	  }
	} catch (err) {
	  console.log(`Error auth.controllers - ERROR: ${err}`);
	  return res.status(400).json({success:false, msg:"Something went wrong!"});
	}
  };
  
  exports.SignupController = async (req, res) => {
	const { stdId, password } = req.body;
	const response = await Users.findOne({ where: { stdId: stdId } });
	if (response != null) {
	  res.status(400).json({ success: false, msg: "stdId has already exists" });
	} else {
	  bcrypt.hash(password, 10).then((hash) => {
		Users.create({
		  stdId: stdId,
		  password: hash,
		})
		  .then((data) => {
			return res.status(200).send("USER REGISTER SUCCESSFULY");
		  })
		  .catch((err) => {
			if (err) {
			  console.log("Error in signup while account activation", err);
			  return res.status(400).json({success:false,msg:"something went wrong!"});
			}
		  });
	  });
	}
  };
  