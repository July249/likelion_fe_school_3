var express = require('express');
var router = express.Router();
const loginCheck = require('../module/loginCheck');

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

router.get('/', loginCheck, (req, res) => {
  res.status(200).json({
    message: 'login success!',
  });
});

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
