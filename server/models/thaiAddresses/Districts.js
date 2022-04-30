module.exports = (sequelize, DataTypes) => {
	const Districts = sequelize.define("Districts", {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		code: {
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

	Districts.associate = (models) => {
		Districts.belongsTo(models.Provinces);
		Districts.hasMany(models.SubDistricts);
	};

	return Districts;
};
