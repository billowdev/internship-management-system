const { Students, Login } = require("../models/internship");

exports.getStudents = async (req, res) => {
	try {
		const loginId = req.user.id

		const isStudent = await Login.findOne({where:{id:loginId, roles:'students'}})
		if(isStudent==null){
			
		}else{
			
		}

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