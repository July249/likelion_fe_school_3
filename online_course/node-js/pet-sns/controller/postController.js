const Post = require('../model/post');

const postController = {
  upload: async (req, res) => {
    const { title, content } = req.body;
    const image = req.file;
    console.log(image);
  },
};

module.exports = postController;
