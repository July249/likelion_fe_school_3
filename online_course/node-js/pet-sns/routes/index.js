var express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const postRouter = require('./posts');
const postController = require('../controller/postController');

router.get('/', postController.list);

router.use('/auth', authRouter);
router.use('/posts', postRouter);

module.exports = router;
