const bcrypt = require("bcrypt");
const { createTokens } = require("../middlewares/auth.middleware");
const { sign, verify } = require("jsonwebtoken");
const { Login, Students, Teachers, Internships, Companies, Addresses, ContactPersons, PresentAddresses, HometownAddresses, Educations, CoStudentInternships } = require("../models/internship");
const { Op } = require("sequelize");


// exports.signinController = async (req, res) => {
// 	try {
// 	  const { username, password } = req.body;
// 	  // validate user input
// 	  if (!(username && password)) {
// 		res.status(400).json({success:false, msg:"All input is required"});
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

// 		user.accessToken = accessToken;
// 		// res.status(200).json(accessToken);
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
// 		console.log(`Error auth.controllers - ERROR: ${err}`);
// 		return res.status(500).json({success:false, msg:"Something went wrong"});
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
	const reqRoles = roles
	const response = await Login.findOne({ where: { username: username } });
	if (response != null) {
		res.status(400).json({ success: false, msg: "username has already exists" });
	} else {

		try {
			// const hasing = await bcrypt.hash(password, 10)
			const user = await Login.create({
				username: username,
				password: password,
				roles: reqRoles
			})
			// const { id, roles } = user
			if (user.roles != null || user.roles != undefined || user.roles != "") {
				if (roles === 'student') {
					const respStudentData = await Students.create({ id: username, first_name: "", last_name: "", program: "", department: "", login_id: user.id })
					const { id } = respStudentData;
					// hook education table for student
					await Educations.create({ student_id: id })
					// hook address table for student
					await Addresses.create({ address_type: "hometown" }).then(data => {
						HometownAddresses.create({ student_id: id, address_id: data.id })
					})

					await Addresses.create({ address_type: "present" }).then(data => {
						PresentAddresses.create({ student_id: id, address_id: data.id })
					})

					// hook address table for contact_person
					await Addresses.create({ address_type: "contact_person" }).then(data => {
						// hook table contact_person for student
						ContactPersons.create({ first_name: "", last_name: "", student_id: id, address_id: data.id })
					})

					// hook table address for company 
					const companyAddress = await Addresses.create({ address_type: "company" })
					const companyData = await Companies.create({ name: "", address_id: companyAddress.id })
					await Internships.create({ student_id: id, company_id: companyData.id })
				}
				if (roles === 'director') {
					const { id } = user
					await Teachers.create({ id: username, name: "", login_id: id })
				}
			} else {
				return res.status(400).json({ success: true, msg: "USER REGISTER FAILED", data })
			}

			return res.status(200).json({ success: true, msg: "USER REGISTER SUCCESSFULY" });
		} catch (err) {

			console.log("Error in signup while account activation", err);
			return res.status(500).json({ success: false, msg: "something went wrong!" });

		}









	}
};

