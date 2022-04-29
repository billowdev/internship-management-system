module.exports = (sequelize, DataTypes) => {
	const CoStudentInternships = sequelize.define("CoStudentInternships", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		student_id: {
			type: DataTypes.STRING(11),
			allowNull: true,
		},
		first_name: {
			type: DataTypes.STRING(150),
			allowNull: true,
		},
		last_name: {
			type: DataTypes.STRING(150),
			allowNull: true,
		},
		phone: {
			type: DataTypes.STRING(10),
			allowNull: true,
		},
	}, {
		underscored: true
	});

	CoStudentInternships.associate = (models) => {
		CoStudentInternships.belongsTo(models.Internships);
	};

	return CoStudentInternships;
};
