const { Students, Login } = require("../models");

// exports.createStudents = async (req, res) => {
// 	try {
// 		const data = req.body;
// 		const reqId = req.user.id;
// 		const isAdmin = await Login.findOne({ where: { id: reqId, permission: "admin" } })
// 		if (isAdmin != null) {
// 			await Users.update(data.updateUserData, { where: { id: reqId } });
// 			res.status(200).json({ success: true, msg: "Update profile successfuly" });
// 		} else {
// 			res.status(400).json({ success: false, msg: "404 Not Found" });
// 		}
// 	} catch (err) {
// 		console.log({ success: false, msg: "on createStudents controllers", error: err });
// 		res.status(500).json({ success: false, msg: "something went wrong" });
// 	}
// }

exports.getStudents = async (req, res) => {
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