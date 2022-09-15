// const router = require('express').Router();

// const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes');

// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);

// module.exports = router;

const router = require('express').Router();
const userRoutes = require('./user-routes');
const imageRoutes = require('./image-routes');
const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);

router.use('/comment', commentRoutes);

router.use('/image', imageRoutes);


module.exports = router;
