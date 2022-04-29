module.exports = (sequelize, DataTypes) => {
	const HometownAddresses = sequelize.define("HometownAddresses", {
		id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
		student_id: {
			type: DataTypes.STRING(11),
			primaryKey: true,
		},
		address_id:{
			type: DataTypes.UUID,
			primaryKey: true,
		}
	}, {
		underscored: true
	});

	HometownAddresses.associate = (models) => {
		HometownAddresses.belongsTo(models.Students, {foreignKey: "student_id"});
		HometownAddresses.belongsTo(models.Addresses, {foreignKey: "address_id"});
	};


	return HometownAddresses;
};
