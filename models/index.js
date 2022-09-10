const User = require('./User');
const Comment = require('./Comment');
const Image = require('./Comment');

// Create associations
User.hasMany(Comment, {
  onDelete: 'CASCADE',
  foreignKey: 'id',
});


Comment.belongsTo(Comment, {
  foreignKey: 'id'
});

User.hasMany(Image, {
  onDelete: 'CASCADE',
  foreignKey: 'id'
});

module.exports = { User, Comment, Image  };
