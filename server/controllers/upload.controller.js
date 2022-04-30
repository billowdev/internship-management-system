require("dotenv").config();
const fs = require("fs")
const { Students, Login } = require("../models/internship");
const path = require('path');


exports.uploadFiles = async (req, res) => {
	try {

		const isStudent = await Students.findOne({ where: { login_id: req.user.id } })

		if (isStudent != null) {
			const studentReqId = await Students.findOne({ where: { login_id: req.user.id } }).then(resp => { return resp.id })
			// =========================== Save ===========================
			let base64ImageReq = req.body.file;
			let base64Image = base64ImageReq.split(';base64,').pop();
			// let date = Date.now();
			user_image_name = `${req.user.id}-${studentReqId}.jpeg`
			let pathToSave;
			if (process.env.NODE_ENV == 'development') {
				pathToSave = `${process.env.PATH_TO_SAVE_IMG_DEVELOPMENT}/${user_image_name}`;
			} else {
				//  /html/static/media
				//test on /wwww/internship-management-sytem
				pathToSave = `${process.env.PATH_TO_SAVE_IMG_PRODUCTION}/${user_image_name}`;
			}

			fs.writeFile(pathToSave, base64Image, { encoding: 'base64' }, function (err) {
				console.log('File created');
			})

			console.log(path.relative)
			await Students.update({
				image_name: user_image_name,
			}, { where: { id: studentReqId } })

			return res.status(200).json({ success: true, msg: "Upload File successfuly" });
		}
		else {
			const adminReq = await Login.findOne({ where: { id: req.user.id, roles: "admin" } })
			if (adminReq != null) {
				// =========================== Save ===========================
				const studentId = await Students.findOne({ where: { login_id: req.body.id } }).then(resp => {
					return resp.id
				})

				let base64ImageReq = req.body.file;
				let base64Image = base64ImageReq.split(';base64,').pop();
				// let date = Date.now();
				user_image_name = `${req.user.id}-${studentId}.jpeg`
				let pathToSave;
				if (process.env.NODE_ENV == 'development') {
					pathToSave = `${process.env.PATH_TO_SAVE_IMG_DEVELOPMENT}/${user_image_name}`;
				} else {
					pathToSave = `${process.env.PATH_TO_SAVE_IMG_PRODUCTION}/${user_image_name}`;
				}
				fs.writeFile(pathToSave, base64Image, { encoding: 'base64' }, function (err) {
					console.log('File created');
				})

				console.log(path.relative)
				await Students.update({
					image_name: user_image_name,
				}, { where: { id: studentId } })

				return res.status(200).json({ success: true, msg: "Upload File successfuly" });
			} else {
				return res.status(404).json({ success: false, msg: "404 Not Found" });
			}

		}

	} catch (err) {
		console.log({ msg: "on upload controller ", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}


