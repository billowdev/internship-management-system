module.exports = (sequelize, DataTypes) => {
	const Provinces = sequelize.define("Provinces", {
		id: {
			type: DataTypes.INTEGER(5),
			primaryKey: true
		},
		code: {
			type: DataTypes.STRING(2),
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

	Provinces.associate = (models) => {
		Provinces.belongsTo(models.Geographies);
		Provinces.hasMany(models.Districts);
	};

	return Provinces;
};
