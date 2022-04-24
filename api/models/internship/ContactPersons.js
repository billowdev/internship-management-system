
module.exports = (sequelize, DataTypes) => {
	const ContactPersons = sequelize.define("ContactPersons", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		first_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		relationship: {
			type: DataTypes.ENUM(["บิดา", "มารดา", "ผู้ปกครอง"]),
			defaultValue: "ผู้ปกครอง",
		},
	}, {
		underscored: true
	});

	ContactPersons.associate = (models) => {
		ContactPersons.belongsTo(models.Students, { foreignKey: "student_id" });
		ContactPersons.belongsTo(models.Addresses, { foreignKey: "address_id" })
	};

	return ContactPersons;
};
