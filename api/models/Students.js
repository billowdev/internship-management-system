module.exports = (sequelize, DataTypes) => {
	const Students = sequelize.define("Students", {
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

	Students.associate = (models) => {
		Students.hasOne(models.Resumes, {
			onDelete: "cascade",
		});
		Students.belongsTo(models.Login, {
			foreignKey: "LoginId",
		});
	};

	return Students;
};
