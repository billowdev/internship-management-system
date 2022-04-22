module.exports = (sequelize, DataTypes) => {
	const CoStudentInternships = sequelize.define("CoStudentInternships", {
		id: {
			type: DataTypes.STRING(11),
			primaryKey: true,
			allowNull: false,
		},
		first_name: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
	}, {
		underscored: true
	});

	CoStudentInternships.associate = (models) => {
		CoStudentInternships.belongsTo(models.Internships);
	};

	return CoStudentInternships;
};
