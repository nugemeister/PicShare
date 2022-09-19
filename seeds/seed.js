const sequelize = require('../config/connection');
const { User, Image, Comment } = require('../models');

const userData = require('./userData.json');
const imageData = require('./imageData.js');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await imageData ();
  
  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
