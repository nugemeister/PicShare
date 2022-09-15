const { Image } = require('../models');

const imageData = [
  {
    title: '../public/images/city-pic.jpg',
    user_id: 1,
    file_name: 'city-pic.jpg',
    
  },
  {
    title: '../public/images/forest-pic.jpg',
    user_id: 1,
    file_name: 'forest-pic.jpg',
  },
  {
    title: '/images/mountain-dog.jpg',
    user_id: 2,
    file_name: 'mountain-dog.jpg',
  },
  {
    title: '/images/nice-pic.jpg',
    user_id: 2,
    file_name: 'nice-pic.jpg',
  },
  {
    title: '/images/sunflower-pic.jpg',
    user_id: 2,
    file_name: 'sunflower-pic.jpg',
  },
  {
    title: '/images/water-pic.jpg',
    user_id: 3,
    file_name: 'water-pic.jpg',
  },
  {
    title: '/images/sunset-pic.jpg',
    user_id: 3,
    file_name: 'sunset-pic.jpg',
  },
  {
    title: '/images/tree-pic.jpg',
    user_id: 4,
    file_name: 'tree-pic.jpg',
  },
  {
    title: '/images/wut-pic.jpg',
    user_id: 5,
    file_name: 'wut-pic.jpg',
  },
];

const seedImage = () => Image.bulkCreate(imageData);

module.exports = seedImage;