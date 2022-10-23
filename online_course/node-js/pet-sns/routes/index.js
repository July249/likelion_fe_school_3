var express = require('express');
var router = express.Router();
// auth 폴더 내의 index.ejs 파일을 연결
const authRouter = require('./auth');
const postRouter = require('./posts');

router.get('/', (req, res) => {
  res.render('index', { postList: [] });
});

router.use('/auth', authRouter);
router.use('/post', postRouter);

module.exports = router;
