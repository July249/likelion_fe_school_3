var express = require('express');
var router = express.Router();

const userInfo = {
  lee: {
    password: '123123',
  },
  kim: {
    password: '456456',
  },
};

router.get('/', (req, res) => {
  const session = req.session;
  res.render('index', {
    username: session.username,
  });
});

router.get('/login/:username/:password', (req, res) => {
  const session = req.session;
  const { username, password } = req.params;
  if (!userInfo[username]) {
    res.status(400).json({
      message: 'not found user',
    });
  }
  if (userInfo[username]['password'] === password) {
    session.username = username;
    res.status(200).json({
      message: 'user login',
    });
  } else {
    res.status(400).json({
      message: 'user password incorrect!',
    });
  }
});

module.exports = router;
