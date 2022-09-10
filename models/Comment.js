const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

<<<<<<< HEAD
class Comment extends Model {}

Comment.init(
=======
class Comments extends Model {}

Comments.init(
>>>>>>> 4cff258f926e0bee2c6e99badf30592c582f1a52
  {
    comment_content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'comment',
  }
);

module.exports = Comment;
=======
    modelName: 'comments',
  }
);

module.exports = Comments;
>>>>>>> 4cff258f926e0bee2c6e99badf30592c582f1a52
