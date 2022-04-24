module.exports = (sequelize, DataTypes) => {
	const PresentAddresses = sequelize.define("PresentAddresses", {
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

	PresentAddresses.associate = (models) => {
		PresentAddresses.belongsTo(models.Students, {foreignKey: "student_id"});
		PresentAddresses.belongsTo(models.Addresses, {foreignKey: "address_id"});
	};


	return PresentAddresses;
};
