module.exports = (sequelize, DataTypes) => {
	const Address = sequelize.define("Address", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		  },
		houseNumber: {
			type: DataTypes.STRING(10),
		},
		road: {
			type: DataTypes.STRING(50),
		},
		village: {
			type: DataTypes.STRING(50),
		},
		subDistrict: {
			type: DataTypes.STRING(50),
		},
		district: {
			type: DataTypes.STRING(50),
		},
		province: {
			type: DataTypes.STRING(50),
		},
		postCode: {
			type: DataTypes.STRING(8),
		},
		addressType: {
			type: DataTypes.ENUM(["hometown", "present"]),
			defaultValue: "present",
		}
	});

	Address.associate = (models) => {
		Address.belongsTo(models.Resumes, {
			foreignKey: "ResumeId"
		})
	};

	return Address;
};
