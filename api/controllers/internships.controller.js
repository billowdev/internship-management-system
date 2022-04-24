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
		console.log({ msg: "on user controller", error: err })
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
			const companyAddressId = await Companies.findOne({ where: { id: companyId } }).then(resp => { return resp.address_id })

			// const { firstName, lastName, email, program, phone } = req.body?.studentDataSave
			// const sender = { id: req.body?.studentDataSave?.id, first_name: firstName, last_name: lastName, email, program, phone }
			const companyData = req.body?.InternshipDataSave
			const companyAddress = {
				house_number: companyData?.internHouseNumber,
				road: companyData?.internRoad,
				sub_district: companyData?.internSubDistrict,
				district: companyData?.internDistrict,
				province: companyData?.internProvince,
				post_code: companyData?.internPostCode
			}
			const company = {
				type: companyData?.internType,
				name: companyData?.internCompanyName,
				ccontact_person_name: companyData?.internContactWithName,
				contact_person_phone: companyData?.internContactWithPhone,
				contact_person_position: companyData?.internContactWithPosition,
				activities: companyData?.internWork,
				propose_to: companyData?.internProposeTo,
				phone: companyData?.internPhone
			}


			const { firstPerson, secondPerson, thirdPerson, fourthPerson } = req.body?.CoStudentInternshipData
			const coStudent = [firstPerson, secondPerson, thirdPerson, fourthPerson]
			// console.log("sender", sender)
			// console.log("company", company)
			console.log("companyAddress", companyAddress)
			console.log("company id \n", companyId, "\n\n")
			await Companies.update(company, { where: { id: companyId } }).then(resp => {
				console.log("company ", resp)
			})
			await Addresses.update(companyAddress, { where: { id: companyAddressId } })

			Promise.all(
				coStudent.map(item =>
					CoStudentInternships.update({ first_name: item?.firstName, last_name: item?.lastName, phone: item?.phone }, { where: { id: item.id } })
				)

			)


			// await Students.update({ where: { id: id } })
			res.status(200).json({ success: true, msg: "update internship information successfuly" });
		}

	} catch (err) {
		console.log({ msg: "on user controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}