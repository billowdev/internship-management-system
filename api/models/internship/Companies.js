module.exports = (sequelize, DataTypes) => {
	const Companies = sequelize.define("Companies", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		contactPersonName: {
			type: DataTypes.STRING(100),
		},
		contactPersonPhone: {
			type: DataTypes.STRING(10),
		},
		name: {
			type: DataTypes.STRING(100),
		},
		region: {
			type: DataTypes.ENUM(["รัฐบาล", "เอกชน", "รัฐวิสาหกิจ"]),
			allowNull: false,
			defaultValue: "รัฐบาล",
		},
		activity: {
			type: DataTypes.STRING(100),
		},
		proposeTo:{
			type: DataTypes.STRING(40)
		},
		phone: {
			type: DataTypes.STRING(10),
		},
		
	});

	Companies.associate = (models) => {
		Companies.hasMany(models.Internships);
		
		Companies.belongsTo(models.Addresses)
	};

	return Companies;
};
