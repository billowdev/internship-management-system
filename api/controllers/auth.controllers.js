const bcrypt = require("bcrypt");
const { createTokens } = require("../middlewares/auth.middleware");
const { sign, verify } = require("jsonwebtoken");
const { Login, Students, Teachers } = require("../models/internship");
const { Op } = require("sequelize");
const e = require("express");

// exports.signinController = async (req, res) => {
// 	try {
// 	  const { username, password } = req.body;
// 	  // validate user input
// 	  if (!(username && password)) {
// 		res.status(400).send("All input is required");
// 	  }

// 	  const user = await Login.findOne({ where: { username } });

// 	  if (user && (await bcrypt.compare(password, user.password))) {
// 		// create token
// 		const accessToken = sign(
// 		  {
// 			id: user.id,
// 			username: user.username,
// 			roles: user.roles,
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
// 		  roles: user.roles,
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
		if (username == '' || password == '') return res.status(400).json({ success: false, msg: "all input is required" });
		// validate user input
		if (!(username && password)) {
			res.status(400).json({ success: false, msg: "all input is required" });
		}
		const user = await Login.findOne({ where: { [Op.and]: { username, password } } });
		if (user != null) {
			// create token
			const accessToken = sign(
				{
					id: user.id,
					username: user.username,
					roles: user.roles,
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
				authenticated: true,
				roles: user.roles,
			});
		} else {
			return res.status(400).json({ success: false, msg: "Invalid Credentials" });
		}
	} catch (err) {
		console.log(`Error auth.controllers - ERROR: ${err}`);
		return res.status(500).json({ success: false, msg: "Something went wrong!" });
	}
};


exports.signupController = async (req, res) => {
	const { username, password, roles } = req?.body;
	const response = await Login.findOne({ where: { username: username } });
	if (response != null) {
		res.status(400).json({ success: false, msg: "username has already exists" });
	} else {
		bcrypt.hash(password, 10).then((hash) => {
			Login.create({
				username: username,
				password: hash,
				roles: roles
			})
				.then((data) => {
					if (data.roles != null || data.roles != undefined || data.roles != "") {
						const respId = data.id
						if (roles === 'student') {
							Students.create({ id: username, first_name: "", last_name: "", program: "", department: "", login_id: respId });
						}
						if (roles === 'director') {
							console.log("response login create ===", data)
							Teachers.create({ id: username, name: "", login_id: respId })
						}
					} else {
						return res.status(400).json({ success: true, msg: "USER REGISTER FAILED", data })
					}
					return res.status(200).json({ success: true, msg: "USER REGISTER SUCCESSFULY" });
				})
				.catch((err) => {
					if (err) {
						console.log("Error in signup while account activation", err);
						return res.status(500).json({ success: false, msg: "something went wrong!" });
					}
				});
		});
	}
};

