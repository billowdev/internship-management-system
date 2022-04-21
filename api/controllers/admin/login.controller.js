const { Login } = require("../../models");
const {Op} = require('sequelize')
exports.createLogin = async (req, res) => {
	try {
		const isAdmin = await Login.findOne({ where: { id: req.user.id, permission: 'admin' } })
		const { username, password, permission } = req.body;

		if (isAdmin != null) {
			const isExist = await Login.findOne({where:{username:username}})

			if(isExist==null){
				const resp = await Login.create({ username, password, permission })
				res.status(200).json({ success: true, msg: "create login success", data: resp })
			}else{
				res.status(201).json({ success: false, msg: "create login faild user is exist"})
			}
		} else {
			res.status(404).json({ success: false, msg: "404 Not Found" })
		}

	} catch (err) {
		console.log({ msg: "on user controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}

exports.getLogin = async (req, res) => {
	try {
		const isAdmin = await Login.findOne({ where: { id: req.user.id, permission: 'admin' } })
		if (isAdmin != null) {
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
			  resp = await Login.findAll({
				offset: startIndex,
				limit: perPage,
				attributes: { exclude: ["password"] },
				where: {
				username: {
					[Op.like]: `%${search}%`,
				  },
				},
				order: [[sortColumn, sortDirection]],
				raw: true,
			  });
			} else if (search) {
			  resp = await Login.findAll({
				attributes: { exclude: ["password"] },
				where: {
				  username: {
					[Op.like]: `%${search}%`,
				  },
				},
				raw: true,
			  });
			} else if (sortColumn) {
			  resp = await Login.findAll({
				offset: startIndex,
				limit: perPage,
				attributes: { exclude: ["password"] },
				order: [[sortColumn, sortDirection]],
				raw: true,
			  });
			} else {
			  resp = await Login.findAll({
				offset: startIndex,
				limit: perPage,
				attributes: { exclude: ["password"] },
				raw: true,
			  });
			}
			res.status(200).json({
			  success: true,
			  msg: "get Login success",
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
		console.log({ msg: "on login controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}