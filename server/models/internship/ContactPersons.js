
module.exports = (sequelize, DataTypes) => {
	const ContactPersons = sequelize.define("ContactPersons", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		first_name: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		last_name: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		relationship: {
			type: DataTypes.STRING(20),
			allowNull: true,
			// type: DataTypes.ENUM(["บิดา", "มารดา", "ผู้ปกครอง"]),
			// defaultValue: "ผู้ปกครอง",
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
