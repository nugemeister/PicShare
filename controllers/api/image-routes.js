const router = require('express').Router();
const { User, Image, Comment } = require('../../models');
const withAuth = require('../../utils/auth');



//create new image
router.post('/', withAuth, async (req, res) => {
    try {
      const imageData = await Image.create({...req.body, userId: req.session.userId});
      res.status(200).json(imageData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //edit image
  router.put('/:id', withAuth, async (req, res) => {
    // edit post by its `id` value
    try {
      const imageData = await Image.update(req.body,{
        where: {
          id: req.params.id
        }
      });
  
      if (!imageData) {
        res.status(404).json({ message: 'No image found with this id!' });
        return;
      }
  
      res.status(200).json(imageData);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

  //delete image 
  router.delete('/:id', withAuth, async (req,res) => {
    try {
      const imageData = await Image.destroy(req.body, {
        where: {
          id: req.params.id
        }
      });

      if (!imageData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(imageData);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

  module.exports = router