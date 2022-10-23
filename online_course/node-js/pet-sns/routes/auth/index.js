const express = require('express');
const router = express.Router();

// /auth/login 로 접근
router.get('/', (req, res) => {
  res.render('login');
});

// /auth/register 로 접근
router.get('/register', (req, res) => {
  res.render('register');
});

module.export = router;
