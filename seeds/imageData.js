const { Image } = require('../models');

const imageData = [
  {
    file_name: '/images/city-pic.jpg',
    user_id: 1,
    title: '/images/city-pic.jpg',
    
  },
  {
    file_name: '/images/forest-pic.jpg',
    user_id: 1,
    title: '/images/forest-pic.jpg',
  },
  {
    file_name: '/images/mountain-dog.jpg',
    user_id: 2,
    title: '/images/mountain-dog.jpg',
  },
  {
    file_name: '/images/nice-pic.jpg',
    user_id: 2,
    title: 'nice-pic.jpg',
  },
  {
    file_name: '/images/sunflower-pic.jpg',
    user_id: 2,
    title: 'sunflower-pic.jpg',
  },
  {
    file_name: '/images/water-pic.jpg',
    user_id: 3,
    title: 'water-pic.jpg',
  },
  {
    file_name: '/images/sunset-pic.jpg',
    user_id: 3,
    title: 'sunset-pic.jpg',
  },
  {
    file_name: '/images/tree-pic.jpg',
    user_id: 4,
    title: 'tree-pic.jpg',
  },
  {
    file_name: '/images/wut-pic.jpg',
    user_id: 5,
    title: 'wut-pic.jpg',
  },
];

const seedImage = () => Image.bulkCreate(imageData);

module.exports = seedImage;