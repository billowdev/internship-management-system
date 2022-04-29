module.exports = (sequelize, DataTypes) => {
	const Geographies = sequelize.define("Geographies", {
		id: {
			type: DataTypes.INTEGER(),
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(),
		},
	},{
		timestamps: false,
		underscored: true
	});

	Geographies.associate = (models) => {
		Geographies.hasMany(models.Provinces)
	};

	return Geographies;
};
