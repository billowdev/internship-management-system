const { Students, Login } = require("../models/internship");


exports.getInternships = async (req, res) => {
	try {
		const resp = await Students.findAll();
		if (resp.length != 0) {
			res.status(200).json({ success: true, msg: "success", data: resp })
		} else {
			res.json({})
		}
	} catch (err) {
		console.log({ msg: "on user controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}