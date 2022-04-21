module.exports = (sequelize, DataTypes) => {
	const Resumes = sequelize.define("Resumes", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		skill: {
			type: DataTypes.STRING(100),
		},
		interest: {
			type: DataTypes.STRING(100),
		},
		projectTopic: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		firstName: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		dateOfBirth: {
			type: DataTypes.DATEONLY(),
			allowNull: true,
		},
		exp: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		job: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		religion: {
			type: DataTypes.STRING(40),
			allowNull: false,
		},
		fatherName: {
			type: DataTypes.STRING(100),
		},
		fatherJob: {
			type: DataTypes.STRING(50),
		},
		motherName: {
			type: DataTypes.STRING(100),
		},
		motherJob: {
			type: DataTypes.STRING(50),
		},

	});

	Resumes.associate = (models) => {
		Resumes.belongsTo(models.Students, {
			foreignKey: "StudentId",
		});
		Resumes.hasMany(models.ContactPersons)

		Resumes.hasOne(models.Educations, {
			onDelete: "cascade",
		});

		Resumes.belongsTo(models.Addresses)
	};

	return Resumes;
};
