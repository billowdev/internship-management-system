const bcrypt = require("bcrypt");
const { createTokens } = require("../middlewares/auth.middleware");
const { sign, verify } = require("jsonwebtoken");
const { Users } = require("../models");
const { Op } = require("sequelize");

// exports.signinController = async (req, res) => {
// 	try {
// 	  const { username, password } = req.body;
// 	  // validate user input
// 	  if (!(username && password)) {
// 		res.status(400).send("All input is required");
// 	  }

// 	  const user = await Users.findOne({ where: { username } });

// 	  if (user && (await bcrypt.compare(password, user.password))) {
// 		// create token
// 		const accessToken = sign(
// 		  {
// 			id: user.id,
// 			username: user.username,
// 			permission: user.permission,
// 		  },
// 		  process.env.JWT_SECRET,
// 		  {
// 			expiresIn: "168h",
// 		  }
// 		);

// 		res.cookie("access-token", accessToken, {
// 		  maxAge: 60 * 60 * 24 * 7 * 1000,
// 		  httpOnly: true,
// 		});

// 		// save user token
// 		// user.accessToken = accessToken;
// 		return res.status(200).json({
// 		  id: user.id,
// 		  token: accessToken,
// 		  username: user.username,
// 		  permission: user.permission,
// 		});
// 	  } else {
// 		return res.status(400).json({success:false, msg:"Invalid Credentials"});
// 	  }
// 	} catch (err) {
// 	  console.log(`Error auth.controllers - ERROR: ${err}`);
// 	  return res.status(400).json({success:false, msg:"Something went wrong!"});
// 	}
//   };


exports.signinController = async (req, res) => {
	try {
		const { username, password } = req.body;
		// validate user input
		if (!(username && password) || username==undefined || password == undefined) {
			res.status(400).send("All input is required");
		}
		const user = await Users.findOne({ where: { [Op.and]: { username, password } } });
		if (user != null) {
			// create token
			const accessToken = sign(
				{
					id: user.id,
					username: user.username,
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
				username: user.username,
				permission: user.permission,
			});
		} else {
			return res.status(400).json({ success: false, msg: "Invalid Credentials" });
		}
	} catch (err) {
		console.log(`Error auth.controllers - ERROR: ${err}`);
		return res.status(400).json({ success: false, msg: "Something went wrong!" });
	}
};


exports.signupController = async (req, res) => {
	const { username, password } = req.body;
	const response = await Users.findOne({ where: { username: username } });
	if (response != null) {
		res.status(400).json({ success: false, msg: "username has already exists" });
	} else {
		bcrypt.hash(password, 10).then((hash) => {
			Users.create({
				username: username,
				password: hash,
			})
				.then((data) => {
					return res.status(200).send("USER REGISTER SUCCESSFULY");
				})
				.catch((err) => {
					if (err) {
						console.log("Error in signup while account activation", err);
						return res.status(400).json({ success: false, msg: "something went wrong!" });
					}
				});
		});
	}
};

