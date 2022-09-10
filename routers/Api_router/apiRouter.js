const {Router} = require('express');
const router = Router();
const authRouter = require('../Auth_router/authRouter');
const workersRouter = require('../Workers_router/workersRouter');
const reviewRouter = require('../Review_router/reviewRouter')



router.use('/auth', authRouter);
router.use('/work', workersRouter);
router.use('/review', reviewRouter);



module.exports = router;
