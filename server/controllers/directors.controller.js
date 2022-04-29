const { Students, Login, Internships, Companies, CoStudentInternships, Addresses, Directors, PresentAddresses, HometownAddresses, Educations } = require("../models/internship");
const { Op } = require("sequelize")

exports.getInternshipsPending = async (req, res) => {
	try {
		const isDirector = await Directors.findOne({ where: { login_id: req.user?.id }, raw: true },)
		if (isDirector != null) {
			const page = parseInt(req.query.page);
			const perPage = parseInt(req.query.per_page);
			let sortColumn = req.query.sort_column;
			const sortDirection = req.query.sort_direction;
			const search = req.query.search;
			const startIndex = (page - 1) * perPage;

			const total = await Login.count();
			let totalPages = total / perPage;
			let resp;

			if (search && sortColumn) {
				resp = await Internships.findAll({
					offset: startIndex,
					limit: perPage,
					include: [
						{
							model: Students,
							require: true,
							where: {
								[Op.or]: [
									{
										id: {
											[Op.like]: `%${search}%`,
										},
									},
									{
										first_name: {
											[Op.like]: `%${search}%`,
										},
									},
									{
										last_name: {
											[Op.like]: `%${search}%`,
										},
									}
								]
							}
						},
						{
							model: Companies,
							require: true,
						},
					],
					where: {
						is_confirm: 0,
						is_send: 1,
						student_id: {
							[Op.like]: `%${search}%`,
						},
					},
					order: [[sortColumn, sortDirection]],
					raw: true,
				});
			} else if (search) {
				resp = await Internships.findAll({
					include: [
						{
							model: Students,
							require: true,
							where: {

								[Op.or]: [
									{
										id: {
											[Op.like]: `%${search}%`,
										},
									},
									{
										first_name: {
											[Op.like]: `%${search}%`,
										},
									},
									{
										last_name: {
											[Op.like]: `%${search}%`,
										},
									}
								]
							}
						},
						{
							model: Companies,
							require: true,
						},
					],
					where: {
						is_confirm: 0, is_send: 1
					},
					raw: true,
				});
			} else if (sortColumn) {
				resp = await Internships.findAll({
					offset: startIndex,
					limit: perPage,
					include: [
						{
							model: Students,
							require: true,

						},
						{
							model: Companies,
							require: true,
						},
					],
					where: {
						is_confirm: 0, is_send: 1
					},
					order: [[sortColumn, sortDirection]],
					raw: true,
				});
			} else {
				resp = await Internships.findAll({
					offset: startIndex,
					limit: perPage,
					include: [
						{
							model: Students,
							require: true,

						},
						{
							model: Companies,
							require: true,
						},

					],

					where: {
						is_confirm: 0, is_send: 1
					},

					raw: true,
				});
			}
			res.status(200).json({
				success: true,
				msg: "get Internship Success",
				data: {
					page: page,
					per_page: perPage,
					total_pages: totalPages,
					total: total,
					data: resp,
				},
			});

		} else {
			res.status(404).json({ success: false, msg: "404 Not Found" })
		}

	} catch (err) {
		console.log({ msg: "on director controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}

exports.getInternshipsConfirm = async (req, res) => {
	try {
		const isDirector = await Directors.findOne({ where: { login_id: req.user?.id }, raw: true },)
		if (isDirector != null) {
			const page = parseInt(req.query.page);
			const perPage = parseInt(req.query.per_page);
			const sortColumn = req.query.sort_column;
			const sortDirection = req.query.sort_direction;
			const search = req.query.search;
			const startIndex = (page - 1) * perPage;

			const total = await Login.count();
			let totalPages = total / perPage;
			let resp;

			if (search && sortColumn) {
				resp = await Internships.findAll({
					offset: startIndex,
					limit: perPage,
					include: [
						{
							model: Students,
							require: true,
							where: {
								[Op.or]: [
									{
										id: {
											[Op.like]: `%${search}%`,
										},
									},
									{
										first_name: {
											[Op.like]: `%${search}%`,
										},
									},
									{
										last_name: {
											[Op.like]: `%${search}%`,
										},
									}
								]
							}
						},
						{
							model: Companies,
							require: true,
						},
					],
					where: {
						is_confirm: 1,
						is_send: 1
					},
					order: [[sortColumn, sortDirection]],
					raw: true,
				});
			} else if (search) {
				resp = await Internships.findAll({
					include: [
						{
							model: Students,
							require: true,
							where: {
								[Op.or]: [
									{
										id: {
											[Op.like]: `%${search}%`,
										},
									},
									{
										first_name: {
											[Op.like]: `%${search}%`,
										},
									},
									{
										last_name: {
											[Op.like]: `%${search}%`,
										},
									}
								]
							}
						},
						{
							model: Companies,
							require: true,
						},
					],
					where: {
						is_confirm: 1, is_send: 1
					},
					raw: true,
				});
			} else if (sortColumn) {
				resp = await Internships.findAll({
					offset: startIndex,
					limit: perPage,
					include: [
						{
							model: Students,
							require: true,

						},
						{
							model: Companies,
							require: true,
						},
					],
					where: {
						is_confirm: 1, is_send: 1
					},
					order: [[sortColumn, sortDirection]],
					raw: true,
				});
			} else {
				resp = await Internships.findAll({
					offset: startIndex,
					limit: perPage,
					include: [
						{
							model: Students,
							require: true,

						},
						{
							model: Companies,
							require: true,
						},

					],

					where: {
						is_confirm: 1, is_send: 1
					},

					raw: true,
				});
			}
			res.status(200).json({
				success: true,
				msg: "get Internship Success",
				data: {
					page: page,
					per_page: perPage,
					total_pages: totalPages,
					total: total,
					data: resp,
				},
			});

		} else {
			res.status(404).json({ success: false, msg: "404 Not Found" })
		}

	} catch (err) {
		console.log({ msg: "on director controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}



exports.getInternshipsByDirector = async (req, res) => {
	try {
		const { id } = req.user
		const isDirector = await Directors.findOne({ where: { login_id: id }, raw: true },)
		const reqParams = req.params.id
		if (isDirector != null) {
			let data;
			const student = await Students.findOne({ where: { id: reqParams } })

			const presentId = await PresentAddresses.findOne({ where: { student_id: student.id } })
			const presentAddr = await Addresses.findOne({ where: { id: presentId.address_id } })

			const hometownId = await HometownAddresses.findOne({ where: { student_id: student.id } })
			const hometownAddr = await Addresses.findOne({ where: { id: hometownId.address_id } })
			const internship = await Internships.findOne({
				where: { student_id: student.id }
			});

			if (internship != null) {
				const company = await Companies.findOne({ where: { id: internship.company_id } })
				const companyAddress = await Addresses.findOne({ where: { id: company.address_id } })
				const coStudents = await CoStudentInternships.findAll({ where: { internship_id: internship.id } })
				const firstPerson = coStudents[0]
				const secondPerson = coStudents[1]
				const thirdPerson = coStudents[2]
				const fourthPerson = coStudents[3]
				const coInternData = { firstPerson, secondPerson, thirdPerson, fourthPerson }
				if (coStudents.length == 0) {

					data = { student, presentAddr, hometownAddr, Internships: internship, Companies: { company, companyAddress }, CoStudentInternships: {} }
					res.status(200).json({ success: true, msg: "get internship success", data });
				} else {
					data = { student, presentAddr, hometownAddr, Internships: internship, Companies: { company, companyAddress }, CoStudentInternships: coInternData }
					res.status(200).json({ success: true, msg: "get internship success", data });
				}

			} else {
				res.status(204).json()
			}
		}

	} catch (err) {
		console.log({ msg: "on director controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}


exports.confirmInternship = async (req, res) => {
	try {
		const id = req.body.id
		await Internships.update({ is_confirm: 1 }, { where: { id: id } })
		res.status(200).json({ success: true, msg: "confirm internship information successfuly" });
	} catch (err) {
		console.log({ msg: "on director controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}

exports.unConfirmInternship = async (req, res) => {
	try {
		const id = req.body.id
		await Internships.update({ is_send: 1, is_confirm: 0 }, { where: { id: id } })
		res.status(200).json({ success: true, msg: "unconfirm internship information successfuly" });
	} catch (err) {
		console.log({ msg: "on director controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}

exports.returnInternship = async (req, res) => {
	try {
		const id = req.body.id
		await Internships.update({ is_send: 0, is_confirm: 0 }, { where: { id: id } })
		res.status(200).json({ success: true, msg: "return internship information successfuly" });
	} catch (err) {
		console.log({ msg: "on director controller", error: err })
		res.status(400).json({ success: false, msg: "something went wrong!" })
	}
}