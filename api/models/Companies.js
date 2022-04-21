module.exports = (sequelize, DataTypes) => {
	const Companies = sequelize.define("Companies", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		contactPerson: {
			type: DataTypes.JSON(),
		},
		name: {
			type: DataTypes.STRING(100),
		},
		region: {
			type: DataTypes.ENUM(["ภาคเหนือ", "ภาคตะวันออกเฉียงเหนือ", "ภาคตะวันตก", "ภาคกลาง", "ภาคตะวันออก", "ภาคใต้"]),
			allowNull: false,
			defaultValue: "ภาคกลาง",
		},
		mainActivity: {
			type: DataTypes.STRING(100),
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
