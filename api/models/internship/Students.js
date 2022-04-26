module.exports = (sequelize, DataTypes) => {
	const Students = sequelize.define("Students", {
		// must be not null
		id: {
			type: DataTypes.STRING(11),
			primaryKey: true,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(150),
			allowNull: true,
		},
		id_card: {
			type: DataTypes.STRING(13),
			allowNull: true
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
		}, phone: {
			type: DataTypes.STRING(10),
			allowNull: true,
		},
	}, {
		underscored: true
	});

	Students.associate = (models) => {
		Students.belongsTo(models.Login, {
			foreignKey: "login_id",
		});
		Students.hasOne(models.ContactPersons, {
			onDelete: "cascade",
		})
		Students.hasMany(models.Educations, {
			onDelete: "cascade",
		});

		Students.hasOne(models.PresentAddresses, { onDelete: 'cascade' });
		Students.hasOne(models.HometownAddresses, { onDelete: 'cascade' });

	};

	return Students;
};
