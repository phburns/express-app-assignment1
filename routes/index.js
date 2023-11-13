// routes/index.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/dashboard', function(req, res, next) {
  res.redirect('/dashboard');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

router.get('/logout', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
