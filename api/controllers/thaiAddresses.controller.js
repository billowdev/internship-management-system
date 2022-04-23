const { Geographies, Districts, Provinces, SubDistricts } = require("../models/thaiAddresses");

exports.getGeographies = async (req, res) => {
	try {
		const resp = await Geographies.findAll();
		if (resp.length != 0) {
			res.status(200).json({ success: true, msg: "get Geographies success", data: resp })
		} else {
			res.json({})
		}
	} catch (err) {
		console.log({ msg: "on thai address controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}

exports.getProvincesByGeographyId = async (req, res) => {
	try {
		console.log(req.params.geographyId)
		const resp = await Provinces.findAll({where:{geography_id:req.params.geographyId}});
		if (resp.length != 0) {
			res.status(200).json({ success: true, msg: "get Provinces By Geography Id success", data: resp })
		} else {
			res.json({})
		}
	} catch (err) {
		console.log({ msg: "on thai address controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}

exports.getDistrictsByProvinceId = async (req, res) => {
	try {
		const resp = await Districts.findAll({where:{province_id:req.params.provinceId}});
		if (resp.length != 0) {
			res.status(200).json({ success: true, msg: "get District By Province Id success", data: resp })
		} else {
			res.json({})
		}
	} catch (err) {
		console.log({ msg: "on thai address controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}

exports.getSubDistrictsByDistrictId = async (req, res) => {
	try {
		const resp = await SubDistricts.findAll({where:{district_id:req.params.districtId}});
		if (resp.length != 0) {
			res.status(200).json({ success: true, msg: "get SubDistricts By district id success", data: resp })
		} else {
			res.status(400).json({})
		}
	} catch (err) {
		console.log({ msg: "on thai address controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}

exports.getSubDistrictsById = async (req, res) => {
	try {
		const resp = await SubDistricts.findAll({where:{id:req.params.id}});
		if (resp.length != 0) {
			res.status(200).json({ success: true, msg: "get SubDistricts By id success", data: resp })
		} else {
			res.status(400).json({})
		}
	} catch (err) {
		console.log({ msg: "on thai address controller", error: err })
		res.status(500).json({ success: false, msg: "something went wrong!" })
	}
}

