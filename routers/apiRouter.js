const {Router} = require('express');
const router = Router();
const authRouter = require('./authRouter');
const workersRouter = require('./workersRouter');
const actionRouter = require('./actionRouter');
const reviewRouter = require('./reviewRouter')
const replyRouter = require('./replyRouter')


router.use('/auth', authRouter);
router.use('/work', workersRouter);
router.use(actionRouter);
router.use('/review', reviewRouter);
router.use('/reply', replyRouter)


module.exports = router;
