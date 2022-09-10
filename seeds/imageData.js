const { Image } = require('../models');

const imageData = [
  {
    title: 'Blossoming Apricot',
    user_id: 1,
    filename: 'city-pic.jpg',
  },
  {
    title: 'Cosmos Flowers',
    user_id: 1,
    filename: 'forest-pic.jpg',
  },
  {
    title: 'Sand + Sea = Summer',
    user_id: 2,
    filename: 'mountain-dog.jpg',
  },
  {
    title: 'Beach Chairs',
    user_id: 2,
    filename: 'nice-pic.jpg',
  },
  {
    title: 'Beach Sunrise',
    user_id: 2,
    filename: 'sunflower-pic.jpg',
  },
  {
    title: 'Fall Colors',
    user_id: 3,
    filename: 'water-pic.jpg',
  },
  {
    title: 'Autumn Mountains',
    user_id: 3,
    filename: 'sunset-pic.jpg',
  },
  {
    title: 'Frozen River',
    user_id: 4,
    filename: 'tree-pic.jpg',
  },
  {
    title: 'Winter Home',
    user_id: 5,
    filename: 'wut-pic.jpg',
  },
];

const seedImage = () => Image.bulkCreate(imageData);

module.exports = seedImage;