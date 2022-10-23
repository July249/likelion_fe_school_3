var express = require('express');
var router = express.Router();

/* CRUD */
const postModel = require('../model/post');
/* Create */
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    const result = await post.save();
    // save() 함수는 비동기로 움직이기 때문에 문제가 발생할 수 있다. 왜? 언제 끝나는지 몰라서...
    // 따라서 async-await 문법을 사용해야 한다.
    res.status(200).json({
      message: 'upload success',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});
/* Read */
router.get('/', async (req, res) => {
  try {
    const result = await postModel.find({}); // 전체 게시물을 가져오기 위함이므로 조건을 작성하지 않는다.
    res.status(200).json({
      message: 'read success',
      data: result,
    });
  } catch (error) {
    res.state(500).json({
      message: error,
    });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findById(id); // 특정 게시물을 가져오기 위해 id를 조회한다
    res.status(200).json({
      message: 'detail ssuccess',
      data: result,
    });
  } catch (error) {
    res.state(500).json({
      message: error,
    });
  }
});

/* Update */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
      },
      {
        new: true, // result 초기화
      }
    );
    res.status(200).json({
      message: 'update success',
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

/* Delete */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: 'delete success',
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// const loginCheck = require('../module/loginCheck');
// const upload = require('../module/imageUpload');

/* loginCheck - Middleware */
// const loginCheck = (req, res, next) => {
//   const userLogin = false;
//   if (userLogin) {
//     next();
//   } else {
//     res.status(400).json({
//       message: 'login fail!!',
//     });
//   }
// };

// router.get('/', loginCheck, (req, res) => {
//   res.status(200).json({
//     message: 'login success!',
//   });
// });

// router.post('/upload', upload.single('image'), (req, res) => {
//   const file = req.file;
//   console.log(file);
//   res.status(200).json({
//     message: 'upload success!',
//   });
// });

/* HTTP Method */
// let arr = [];

// GET method
// router.get('/read', (req, res) => {
//   res.status(200).json({
//     message: 'read success',
//   });
// });

// POST method
// router.post('/create', (req, res) => {
//   const { data } = req.body;
//   arr.push(data);
//   res.status(200).json({
//     message: 'create success',
//     result: arr,
//   });
//   console.log(req.body);
// });

// PUT method
// router.put('/update/:id', (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;
//   arr[id] = data;
//   res.status(200).json({
//     message: 'update success',
//     result: arr,
//   });
//   console.log(id);
// });

// DELETE method
// router.delete('/delete/:id', (req, res) => {
//   const { id } = req.params;
//   arr.splice(id, 1);
//   res.status(200).json({
//     message: 'delete success',
//     result: arr,
//   });
// });

module.exports = router;
