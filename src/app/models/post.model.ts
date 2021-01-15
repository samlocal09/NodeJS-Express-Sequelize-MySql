export function PostFactory(sequelize, Sequelize) {
	const Post = sequelize.define('post', {
      post_id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	  },
	  title: {
		allowNull: false,
        type: Sequelize.STRING(255)
	  },
	  content: {
		allowNull: true,
        type: Sequelize.STRING(4000)
	  },
	  article_id: {
		allowNull: true,
		type: Sequelize.INTEGER,
	  },
	  url: {
		allowNull: true,
        type: Sequelize.STRING(100)
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
	
	return Post;
}