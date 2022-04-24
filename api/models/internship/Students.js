module.exports = (sequelize, DataTypes) => {
	const Students = sequelize.define("Students", {
		// must be not null
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
		program: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		department: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		// all below can fill later initial as null value with allow null true
		skill: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		interest: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		project_topic: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		//date of birth
		dob: {
			type: DataTypes.DATEONLY(),
			allowNull: true,
		},
		// experience
		exp: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		religion: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		father_name: {
			type: DataTypes.STRING(150),
			allowNull: true,
		},
		father_job: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		mother_name: {
			type: DataTypes.STRING(150),
			allowNull: true,
		},
		mother_job: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		present_gpa: {
			type: DataTypes.DECIMAL(4),
			allowNull: true,
		},
		status_resume: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		}
	}, {
		underscored: true
	});

	Students.associate = (models) => {
		Students.belongsTo(models.Login, {
			foreignKey: "login_id",
		});
		Students.hasOne(models.ContactPersons)
		Students.hasOne(models.Educations, {
			onDelete: "cascade",
		});
		Students.belongsTo(models.Addresses)
	};

	return Students;
};
