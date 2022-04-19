module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("Users", {
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
		type: DataTypes.ENUM(["admin", "student"]),
		allowNull: false,
		defaultValue: "student",
	  },
	  status: {
		type: DataTypes.ENUM(["active", "inactive"]),
		allowNull: false,
		defaultValue: "active",
	  },
	});
  
	// Users.associate = (models) => {
	
  
	// };
  
	return Users;
  };
  