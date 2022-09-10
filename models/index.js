const User = require('./User');
const Comment = require('./Comment');
const Image = require('./Image');

// Create associations
User.hasMany(Comment, {
  onDelete: 'CASCADE',
  foreignKey: 'id',
});


Comment.belongsTo(Image, {
  foreignKey: 'id'
});

User.hasMany(Image, {
  onDelete: 'CASCADE',
  foreignKey: 'id'
});

Image.belongsTo(User, {
  foreignKey: 'id'
});


module.exports = { User, Comment, Image  };
