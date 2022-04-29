const fs = require("fs")
const { Students } = require("../models/internship");
const path = require('path');
const { Blob } = require('buffer');
exports.uploadFiles = async (req, res) => {
	try {
		const reqId = await Students.findOne({ where: { login_id: req.user.id } }).then(resp => { return resp.id })
	
		// =========================== Save ===========================
		let base64ImageReq = req.body.file;
		let base64Image = base64ImageReq.split(';base64,').pop();
		// let date = Date.now();
		user_image_name = `${req.user.id}-${reqId}.jpeg`

		fs.writeFile(`../src/views/resources/assets/uploads/${user_image_name}`, base64Image, { encoding: 'base64' }, function (err) {
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


