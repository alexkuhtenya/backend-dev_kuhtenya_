const {Router} = require('express');
const router = Router();
const authRouter = require('./authRouter');
const workersRouter = require('./workersRouter');
const actionRouter = require('./actionRouter');
const reviewRouter = require('./reviewRouter')

router.use('/auth', authRouter);
router.use('/work', workersRouter);
router.use(actionRouter);
router.use('/review', reviewRouter);

module.exports = router;
