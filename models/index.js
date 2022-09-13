const User = require('./User');
const Comment = require('./Comment');
const Image = require('./Image');

// Create associations
User.hasMany(Comment, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
})

User.hasMany(Image, {
  onDelete: 'CASCADE',
  foreignKey: 'user_id'
});

Image.belongsTo(User, {
  foreignKey: 'user_id',
});

Image.hasMany(Comment, {
  foreignKey: 'image_id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Image, {
  foreignKey: 'image_id'
});


module.exports = { User, Comment, Image  };
