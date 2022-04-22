module.exports = (sequelize, DataTypes) => {
	const Teachers = sequelize.define("Teachers", {
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
	}, {
		underscored: true
	});

	Teachers.associate = (models) => {
		Teachers.belongsTo(models.Login, {
			foreignKey: "login_id",
		});
	};

	return Teachers;
};
