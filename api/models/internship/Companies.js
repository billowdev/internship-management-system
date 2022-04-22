module.exports = (sequelize, DataTypes) => {
	const Companies = sequelize.define("Companies", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		contact_person_name: {
			type: DataTypes.STRING(100),
		},
		contact_person_phone: {
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
		activities: {
			type: DataTypes.STRING(100),
		},
		propose_to:{
			type: DataTypes.STRING(40)
		},
		phone: {
			type: DataTypes.STRING(10),
		},
		
	}, {
		underscored: true
	});

	Companies.associate = (models) => {
		Companies.hasMany(models.Internships);
		Companies.belongsTo(models.Addresses)
	};

	return Companies;
};
