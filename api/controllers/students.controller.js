const { Students, Login, ContactPersons, Educations, PresentAddresses, HometownAddresses, Addresses } = require("../models/internship");

exports.getStudents = async (req, res) => {
	try {
		const isStudent = await Login.findOne({ where: { id: req.user.id, roles: 'student' } })

		if (isStudent != null) {
			const student = await Students.findOne({ where: { login_id: isStudent.id } })
			const contactPerson = await ContactPersons.findOne({ where: { student_id: student.id } })
			const education = await Educations.findAll({ where: { student_id: student.id } });
			const presentAddr = await PresentAddresses.findOne({ where: { student_id: student.id } })
			const PresentAddress = await Addresses.findOne({ where: { id: presentAddr.address_id } })
			const hometownAddr = await HometownAddresses.findOne({ where: { student_id: student.id } })
			const HometownAddress = await Addresses.findOne({ where: { id: hometownAddr.address_id } })

			if (education.length != 0) {
				res.status(200).json({ success: true, msg: "get student success", data: { student, contactPerson, education, PresentAddress, HometownAddress } })
			} else {
				res.status(200).json({ success: true, msg: "get student success", data: { student, contactPerson, education: {}, PresentAddress, HometownAddress } })
			}

		} else {
			res.status(400).json({ success: false, msg: "something wen wrong" })
		}
	} catch (err) {
		console.log({ msg: "on student controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}

exports.updateStudents = async (req, res) => {
	try {
		const login = await Login.findOne({ where: { id: req.user.id, roles: 'student' } })
		const isStudent = await Students.findOne({ where: { login_id: login.id } })
		if (isStudent != null) {
			const { id } = isStudent
			console.log(req.body)

			res.status(200).json({ success: true, msg: "get student success" })
		} else {
			res.status(400).json({ success: false, msg: "something wen wrong" })
		}
	} catch (err) {
		console.log({ msg: "on student controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}