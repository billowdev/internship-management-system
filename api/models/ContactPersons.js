
module.exports = (sequelize, DataTypes) => {
	const ContactPersons = sequelize.define("ContactPersons", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		  },
		firstName: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		relationship: {
			type: DataTypes.ENUM(["บิดา", "มารดา", "ผู้ปกครอง"]),
			defaultValue: "ผู้ปกครอง",
		},
		houseNumber: {
			type: DataTypes.STRING(10),
		},
		road: {
			type: DataTypes.STRING(50),
		},
		village: {
			type: DataTypes.STRING(50),
		},
		subDistrict: {
			type: DataTypes.STRING(50),
		},
		district: {
			type: DataTypes.STRING(50),
		},
		province: {
			type: DataTypes.STRING(50),
		},
		postCode: {
			type: DataTypes.STRING(8),
		},
	});

	ContactPersons.associate = (models) => {
		ContactPersons.belongsTo(models.Resumes);
	};

	return ContactPersons;
};
