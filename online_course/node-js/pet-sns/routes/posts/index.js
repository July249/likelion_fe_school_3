const express = require('express');
const router = express.Router();
const upload = require('../../module/multer');
const postController = require('../../controller/postController');

router.get('/upload', (req, res) => {
  res.render('upload');
});

router.get('/:id', (req, res) => {
  res.render('detail');
});

router.get('/update/:id', (req, res) => {
  res.render('update');
});

router.post('/', upload.single('image'), postController.upload);

module.exports = router;
