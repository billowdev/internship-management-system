const { Students, Login, Internships, Companies, CoStudentInternships, Addresses } = require("../models/internship");


exports.getInternships = async (req, res) => {
	try {
		const resp = await Students.findAll();
		if (resp.length != 0) {
			res.status(200).json({ success: true, msg: "success", data: resp })
		} else {
			res.json({})
		}
	} catch (err) {
		console.log({ msg: "on internship controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}


exports.getInternshipsByStudents = async (req, res) => {
	try {
		const { id, roles } = req?.user
		const stdData = await Students.findOne({ where: { login_id: id }, raw: true },)
		const stdId = stdData?.id
		console.log("student id: ", stdId)
		if (roles === 'student') {
			let data;
			const internship = await Internships.findOne({
				where: { student_id: stdId }
			});
			if (internship != null) {
				const company = await Companies.findOne({ where: { id: internship.company_id } })
				const companyAddress = await Addresses.findOne({ where: { id: company.address_id } })
				const coStudents = await CoStudentInternships.findAll({ where: { internship_id: internship.id } })

				if (coStudents.length == 0) {
					data = { Internships: internship, Companies: { company, companyAddress }, CoStudentInternships: {} }
					res.status(200).json({ success: true, msg: "get internship success", data });
				} else {
					data = { Internships: internship, Companies: { company, companyAddress }, CoStudentInternships: coStudents }
					res.status(200).json({ success: true, msg: "get internship success", data });
				}

			} else {
				res.status(204).json()
			}
		}

	} catch (err) {
		console.log({ msg: "on internship controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}

exports.sendInternship = async (req, res) => {
	try {
		await Internships.update({ is_send: 1 }, { where: { id: req.body.id } })
		res.status(200).json({ success: true, msg: "send successfuly" })
	} catch (err) {
		console.log({ msg: "on internship controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}

exports.unsendInternship = async (req, res) => {
	try {
		await Internships.update({ is_send: 0 }, { where: { id: req.body.id } })
		res.status(200).json({ success: true, msg: "unsend successfuly" })
	} catch (err) {
		console.log({ msg: "on internship controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}

exports.updateInternship = async (req, res) => {
	try {
		const reqId = req.user?.id
		const whoLogin = await Login.findOne({ where: { id: reqId, roles: 'student' } })
		const { id } = whoLogin
		const student = await Students.findOne({ where: { login_id: id } })
		if (student == null) {
			res.status(400).json({ success: false, msg: "unauthorize" })
		} else {
			const { id } = student
			const companyId = await Internships.findOne({ where: { student_id: id } }).then(resp => { return resp.company_id })
			const internshipId = await Internships.findOne({ where: { student_id: id } }).then(resp => { return resp.id })

			const companyAddressId = await Companies.findOne({ where: { id: companyId } }).then(resp => { return resp.address_id })

			const { coStudent, companies, companyAddress, sender } = req.body
			await Students.update(sender, { where: { id: sender.id } })
			await Addresses.update(companyAddress, { where: { id: companyAddressId } })
			await Companies.update(companies, { where: { id: companyId } })

			const { firstPerson, secondPerson, thirdPerson, fourthPerson } = coStudent

			await CoStudentInternships.update(firstPerson, { where: { id: firstPerson?.id, internship_id: internshipId } })
			await CoStudentInternships.update(secondPerson, { where: { id: secondPerson?.id, internship_id: internshipId } })
			await CoStudentInternships.update(thirdPerson, { where: { id: thirdPerson?.id, internship_id: internshipId } })
			await CoStudentInternships.update(fourthPerson, { where: { id: fourthPerson?.id, internship_id: internshipId } })



			res.status(200).json({ success: true, msg: "update internship information successfuly" });
		}

	} catch (err) {
		console.log({ msg: "on internship controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}