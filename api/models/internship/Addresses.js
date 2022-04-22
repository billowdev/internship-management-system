module.exports = (sequelize, DataTypes) => {
	const Addresses = sequelize.define("Addresses", {
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
		addressesType: {
			type: DataTypes.ENUM(["hometown", "present", "company", "contactPerson"]),
			defaultValue: "present",
		}
	});

	Addresses.associate = (models) => {
		Addresses.hasMany(models.Companies);
		Addresses.hasMany(models.Resumes);
		Addresses.hasMany(models.ContactPersons);
	};

	return Addresses;
};
