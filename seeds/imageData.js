const { Image } = require('../models');

const imageData = [
  {
    title: '/images/city-pic.jpg',
    user_id: 1,
    file_name: '/images/city-pic.jpg',
    
  },
  {
    title: '/images/forest-pic.jpg',
    user_id: 1,
    file_name: '/images/forest-pic.jpg',
  },
  {
    title: '/images/mountain-dog.jpg',
    user_id: 2,
    file_name: '/images/mountain-dog.jp',
  },
  {
    title: '/images/nice-pic.jpg',
    user_id: 2,
    file_name: '/images/nice-pic.jpg',
  },
  {
    title: '/images/sunflower-pic.jpg',
    user_id: 2,
    file_name: '/images/sunflower-pic.jpg',
  },
  {
    title: '/images/water-pic.jpg',
    user_id: 3,
    file_name: '/images/water-pic.jpg',
  },
  {
    title: '/images/sunset-pic.jpg',
    user_id: 3,
    file_name: '/images/sunset-pic.jpg',
  },
  {
    title: '/images/tree-pic.jpg',
    user_id: 4,
    file_name: '/images/tree-pic.jp',
  },
  {
    title: '/images/wut-pic.jpg',
    user_id: 5,
    file_name: '/images/wut-pic.jpg',
  },
];

const seedImage = () => Image.bulkCreate(imageData);

module.exports = seedImage;