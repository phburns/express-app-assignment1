var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res, next) {
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

module.exports = router;
