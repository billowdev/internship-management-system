
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
	});

	ContactPersons.associate = (models) => {
		ContactPersons.belongsTo(models.Resumes);
		ContactPersons.belongsTo(models.Addresses)
	};

	return ContactPersons;
};
