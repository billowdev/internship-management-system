const { Students, Login, Internships } = require("../models/internship");


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


exports.getInternshipsByStudents = async (req, res) => {
	try {
		const { id, roles } = req?.user
		if (roles === 'student') {
			const resp = await Internships.findOne({ where: { student_id: id } });
			if (resp != null) {
				res.status(200).json({ success: true, msg: "get internship information successfuly", data: resp })
			} else {
				res.status(204).json()
			}
		}

	} catch (err) {
		console.log({ msg: "on user controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}


exports.getInternshipsUpdate = async (req, res) => {
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