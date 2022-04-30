const fs = require("fs")
const { Students } = require("../models/internship");
const path = require('path');
require("dotenv").config();

exports.uploadFiles = async (req, res) => {
	try {
		const reqId = await Students.findOne({ where: { login_id: req.user.id } }).then(resp => { return resp.id })

		// =========================== Save ===========================
		let base64ImageReq = req.body.file;
		let base64Image = base64ImageReq.split(';base64,').pop();
		// let date = Date.now();
		user_image_name = `${req.user.id}-${reqId}.jpeg`
		let pathToSave;
		if(process.env.NODE_ENV=='development'){
			 pathToSave = `${process.env.PATH_TO_SAVE_IMG_DEVELOPMENT}/${user_image_name}`;
		}else{
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
		}, { where: { id: reqId } })

		return res.status(200).json({ success: true, msg: "Upload File successfuly" });
	} catch (err) {
		console.log({ msg: "on upload controller ", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}


