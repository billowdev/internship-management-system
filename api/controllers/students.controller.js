const { Students, Login, ContactPersons, Educations, PresentAddresses, HometownAddresses, Addresses } = require("../models/internship");

exports.getStudents = async (req, res) => {
	try {
		const isStudent = await Login.findOne({ where: { id: req.user.id, roles: 'student' } })

		if (isStudent != null) {
			const student = await Students.findOne({ where: { login_id: isStudent.id } })
			const contactPerson = await ContactPersons.findOne({ where: { student_id: student.id } })
			const contactPersonAddress = await Addresses.findOne({ where: { id: contactPerson.address_id } })
			const education = await Educations.findAll({ where: { student_id: student.id } });
			const presentAddr = await PresentAddresses.findOne({ where: { student_id: student.id } })
			const PresentAddress = await Addresses.findOne({ where: { id: presentAddr.address_id } })
			const hometownAddr = await HometownAddresses.findOne({ where: { student_id: student.id } })
			const HometownAddress = await Addresses.findOne({ where: { id: hometownAddr.address_id } })

			if (education.length != 0) {
				res.status(200).json({ success: true, msg: "get student success", data: { student, contactPersonData: { contactPerson, contactPersonAddress }, education, PresentAddress, HometownAddress } })
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
			const { present, hometown, student } = req?.body
			const eduaction1 = req.body?.education?.educationData1
			const eduaction2 = req.body?.education?.educationData2
			const eduaction3 = req.body?.education?.educationData3

			await Educations.update(eduaction1, { where: { id: eduaction1.id } })
			await Educations.update(eduaction2, { where: { id: eduaction2.id } })
			await Educations.update(eduaction3, { where: { id: eduaction3.id } })

			const present_id = await PresentAddresses.findOne({ where: { student_id: id } }).then(resp => { return resp.address_id })
			const hometown_id = await HometownAddresses.findOne({ where: { student_id: id } }).then(resp => { return resp.address_id })
			await Addresses.update(present, { where: { id: present_id } })
			await Addresses.update(hometown, { where: { id: hometown_id } })
			await Students.update(student, { where: { id: id } })
			await ContactPersons.update(req.body?.contactPerson?.data, {where:{student_id:id}})
			const contactPersonAddressId = await ContactPersons.findOne({where:{student_id:id}}).then(resp=>{return resp.address_id})
			await Addresses.update(req.body?.contactPerson?.address, {where:{id:contactPersonAddressId}})

			res.status(200).json({ success: true, msg: "update student success" })
		} else {
			res.status(400).json({ success: false, msg: "something wen wrong" })
		}
	} catch (err) {
		console.log({ msg: "on student controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}