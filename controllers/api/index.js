const router = require('express').Router();
const userRoutes = require('./user-routes');
const imageRoutes = require('./image-routes');
const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);

router.use('/comment', commentRoutes);

router.use('/image', imageRoutes);


module.exports = router;
