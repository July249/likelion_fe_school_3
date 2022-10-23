const express = require('express');
const router = express.Router();
// const authController = require("../../controller/authController");

// router.post("/register", authController.register);
// router.post("/login", authController.login);

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

// router.post("/logout", (req, res) => {
//   res.clearCookie("access_token");
//   res.redirect("/");
// });

module.exports = router;
