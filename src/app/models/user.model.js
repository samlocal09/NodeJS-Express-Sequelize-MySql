module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
      user_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	  },
	  username: {
		allowNull: false,
        type: Sequelize.STRING(255)
      },
	  user_email: {
		allowNull: false,
        type: Sequelize.STRING(255)
	  },
	  password: {
		allowNull: true,
        type: Sequelize.STRING(60).BINARY
	  },
	  created_at: {
		allowNull: true,
		type: Sequelize.DATE, 
		defaultValue: Sequelize.NOW 
	  }, created_by: {
		allowNull: true,
		type: Sequelize.STRING(255)
      }, updated_at: {
		allowNull: true,
		type: Sequelize.DATE, 
		defaultValue: Sequelize.NOW 
	  }, updated_by: {
		allowNull: true,
		type: Sequelize.STRING(255)
	  }
	}, {
		freezeTableName: true,
		timestamps: false
	});
	
	return User;
}