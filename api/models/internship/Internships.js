module.exports = (sequelize, DataTypes) => {
	const Internships = sequelize.define("Internships", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		status: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		}
	});

	Internships.associate = (models) => {
		Internships.belongsTo(models.Students, {
			foreignKey: "StudentId",
		});
		Internships.belongsTo(models.Companies);

		Internships.hasMany(models.CoStudentInternships, {
			foreignKey: "InternshipId",
		});
	};

	return Internships;
};
