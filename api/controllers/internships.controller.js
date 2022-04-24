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
		console.log({ msg: "on user controller", error: err })
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
			// const internship = await Internships.findOne({
			// 	where: { student_id: id }, include: [
			// 		{
			// 			model: Companies,
			// 			require: true,

			// 		},
			// 	],
			// }
			let data;
			const internship = await Internships.findOne({
				where: { student_id: stdId }
			});
			if (internship != null) {
				const company = await Companies.findOne({ where: { id: internship.company_id } })
				const companyAddress = await Addresses.findOne({where:{id:company.address_id}})
				const coStudents = await CoStudentInternships.findAll({ where: { internship_id: internship.id } })
			
				if (coStudents.length == 0) {
					data = { Internships: internship, Companies: {company, companyAddress}, CoStudentInternships: {} }
					res.status(200).json({ success: true, msg: "get internship success", data });
				} else {
					data = { Internships: internship, Companies: {company, companyAddress}, CoStudentInternships: coStudents }
					res.status(200).json({ success: true, msg: "get internship success", data });
				}

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