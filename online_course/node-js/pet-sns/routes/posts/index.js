const express = require('express');
const router = express.Router();
const upload = require('../../module/multer');
const postController = require('../../controller/postController');
// const checkUser = require("../../module/checkUser");

router.get('/upload', (req, res) => {
  res.render('upload');
});

router.get('/:id', postController.detail);

router.get('/update/:id', postController.updateLayout);
// router.get("/update/:id", checkUser, postController.updateLayout);

router.post('/', upload.single('image'), postController.upload);
// router.post("/", checkUser, upload.single("image"), postController.upload);

router.post('/update/:id', postController.update);
// router.post("/update/:id", checkUser, postController.update);

router.post('/delete/:id', postController.delete);
// router.post("/delete/:id", checkUser, postController.delete);

// router.post("/like/:id", checkUser, postController.like);

// router.post("/comment/:id", checkUser, postController.comment);

module.exports = router;
