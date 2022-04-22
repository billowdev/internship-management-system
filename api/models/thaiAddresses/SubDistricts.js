module.exports = (sequelize, DataTypes) => {
	const SubDistricts = sequelize.define("SubDistricts", {
		id: {
			type: DataTypes.INTEGER(),
			primaryKey: true
		},
		zip_code: {
			type: DataTypes.INTEGER(),
		},
		name_th: {
			type: DataTypes.STRING(150),
		},
		name_en: {
			type: DataTypes.STRING(150),
		},
	}, {
		timestamps: false,
		underscored: true
	});

	SubDistricts.associate = (models) => {
		SubDistricts.belongsTo(models.Districts)
	};

	return SubDistricts;
};
