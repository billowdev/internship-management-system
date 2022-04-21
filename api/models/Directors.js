
module.exports = (sequelize, DataTypes) => {
	const Directors = sequelize.define("Directors", {
		name: {
			type: DataTypes.STRING(150),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(10),
			allowNull: false,
		},
		program: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		department: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
	});

	Directors.associate = (models) => {
		Directors.belongsTo(models.Login, {
			foreignKey: "LoginId",
		});
	};

	return Directors;
};
