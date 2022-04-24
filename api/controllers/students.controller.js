const { Students, Login } = require("../models/internship");

exports.getStudents = async (req, res) => {
	try {
		const isStudent = await Login.findOne({ where: { id: req.user.id, roles: 'student' } })

		if (isStudent != null) {
			const resp = await Students.findOne({ where: { login_id: isStudent.id } })
			res.status(200).json({ success: true, msg: "get profile success", data:resp })
		} else {
			res.status(400).json({ success: false, msg: "something wen wrong" })
		}
	} catch (err) {
		console.log({ msg: "on user controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}