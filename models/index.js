const User = require('./User');
const Comments = require('./Comments');
const Images = require('./Comments');

// Create associations
User.hasMany(Comments, {
  onDelete: 'CASCADE',
  foreignKey: 'id',
});


Comments.belongsTo(Comments, {
  foreignKey: 'id'
});

User.hasMany(Images, {
  onDelete: 'CASCADE',
  foreignKey: 'id'
});

module.exports = { User, Comments, Images  };
