const router = require('express').Router();
const { User, Image, Comment } = require('../../models');
const {withAuth, withAuthApi } = require('../../utils/auth');



//create new image
router.post('/', withAuthApi, async (req, res) => {
    try {
      const imageData = await Image.create({...req.body, user_id: req.session.user_id});
      res.status(200).json(imageData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // //FOR FUTURE DEVELOPMENT: edit image
  // router.put('/:id', withAuth, async (req, res) => {
  //   // edit post by its `id` value
  //   try {
  //     const imageData = await Image.update(req.body,{
  //       where: {
  //         id: req.params.id
  //       }
  //     });
  
  //     if (!imageData) {
  //       res.status(404).json({ message: 'No image found with this id!' });
  //       return;
  //     }
  
  //     res.status(200).json(imageData);
  //   } catch (err) {
  //     res.status(500).json(err.message);
  //   }
  // });

  //delete image 
  router.delete('/:id', withAuth, async (req,res) => {
    try {
      const imageData = await Image.destroy({
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
      console.error(err);
      res.status(500).json(err.message);
    }
  });

  module.exports = router