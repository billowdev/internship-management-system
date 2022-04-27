module.exports = (sequelize, DataTypes) => {
	const Teachers = sequelize.define("Teachers", {
		id: {
			type: DataTypes.STRING(11),
			primaryKey: true,
			allowNull: false,
		},
		first_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(10),
			allowNull: true,
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
