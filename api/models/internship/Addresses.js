module.exports = (sequelize, DataTypes) => {
	const Addresses = sequelize.define("Addresses", {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4,
		  },
		house_number: {
			type: DataTypes.STRING(10),
		},
		road: {
			type: DataTypes.STRING(50),
		},
		village: {
			type: DataTypes.STRING(50),
		},
		sub_district: {
			type: DataTypes.STRING(150),
		},
		district: {
			type: DataTypes.STRING(150),
		},
		province: {
			type: DataTypes.STRING(150),
		},
		post_code: {
			type: DataTypes.STRING(10),
		},
		addresses_type: {
			type: DataTypes.ENUM(["hometown", "present", "company", "contact_person"]),
			defaultValue: "present",
		}
	}, {
		underscored: true
	});

	Addresses.associate = (models) => {
		Addresses.hasMany(models.Companies);
		Addresses.hasMany(models.Students);
		Addresses.hasMany(models.ContactPersons);
	};

	return Addresses;
};
