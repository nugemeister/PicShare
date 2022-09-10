const User = require('./User');
const Comment = require('./Comment');
const Image = require('./Comment');

// Create associations
User.hasMany(Comment, {
  onDelete: 'CASCADE',
  foreignKey: 'id',
});

Comment.belongsTo(User, {
  foreignKey: 'id'
})

User.hasMany(Image, {
  onDelete: 'CASCADE',
  foreignKey: 'id'
});

Image.belongsTo(User, {
  foreignKey: 'id',
});

Image.hasMany(Comment, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
})

Comment.belongsTo(Image, {
  foreignKey: 'id'
});


module.exports = { User, Comment, Image  };
