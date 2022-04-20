module.exports = (sequelize, DataTypes) => {
	const CoStudentInternships = sequelize.define("CoStudentInternships", {
		id: {
			type: DataTypes.STRING(11),
			primaryKey: true,
			allowNull: false,
		},
		firstName: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
	});

	CoStudentInternships.associate = (models) => {
		CoStudentInternships.belongsTo(models.Internships);
	};

	return CoStudentInternships;
};
