// routes/index.js
var express = require('express');
var router = express.Router();
var axios = require('axios'); // Add this line to import axios

router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/dashboard', function(req, res, next) {
  // Fetch data from JSONPlaceholder (replace with your desired endpoint)
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      res.render('dashboard', { title: 'Dashboard', todos: response.data });
    })
    .catch(error => {
      console.error(error);
      res.render('error');
    });
});

router.get('/dashboard', function(req, res, next) {
  // Fetch data from JSONPlaceholder (replace with your desired endpoint)
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      res.render('dashboard', { title: 'Dashboard', todos: response.data });
    })
    .catch(error => {
      console.error(error);
      res.render('error');
    });
});

router.get('/profile', function(req, res, next) {
  // Fake user data
  var user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    username: 'johndoe',
    phone: '1234567890',
    website: 'www.example.com'
  };

  res.render('profile', { user: user });
});

router.get('/logout', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
