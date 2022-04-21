module.exports = (sequelize, DataTypes) => {
	const Login = sequelize.define("Login", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		},
		username: {
			type: DataTypes.STRING(11),
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		permission: {
			type: DataTypes.ENUM(["admin", "director", "student"]),
			allowNull: false,
			defaultValue: "student",
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	});

	Login.associate = (models) => {
		Login.hasOne(models.Students, {
			onDelete: "cascade",
		});
		Login.hasOne(models.Teachers, {
			onDelete: "cascade",
		});
	};

	return Login;
};
