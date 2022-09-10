const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}
//work on image model with cloudinary link 
Image.init(
  {
   id: {
      type: DataType.INTEGER, 
      autoIncrement: true,
      primaryKey: true,
    },
    // points to cloudinary URL hosting image
    file_name: {
      type: DataType.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'image',
  }
);

module.exports = Image;
