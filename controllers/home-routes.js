const router = require('express').Router();
const { User, Image, Comment } = require('../models');
const {withAuth, withAuthApi } = require('../utils/auth');



router.get('/', (req, res) => {

  res.render('homepage');
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/gallery');
    return;
  }

  res.render('login');
});

//gallery route
router.get('/gallery', withAuth, async (req, res) => {
  try {
    const dbImageData = await Image.findAll({
     where: {
         user_id: req.session.user_id
     }
    });

    const images = dbImageData.map((image) =>
      image.get({ plain: true })
    );

    res.render('gallery', {
      layout: 'main',
      images,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Image post Route
router.get('/post/:id', async (req, res) => {
  Image.findByPk(req.params.id, {
       include: [
       User,
         {
           model: Comment,
           include: {
             model: User
           }
         },
         
       ],
     })
     .then((dbImageData) => {
       if (dbImageData) {
         const image = dbImageData.get({ plain: true });

         console.log(image)
 
         res.render("image-post", { 
           post,
           logged_in: req.session.logged_in });
       } else {
         res.status(404).end();
       }
     })
     .catch((err) => {
       res.status(500).json(err);
     });
 });

module.exports = router;

