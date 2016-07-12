var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./users/user');
var userController = require('./users/userController');
var searchController = require('./search/searchController');

var port = 8080;   

//// Mongoose Initialization for Mongo 
mongoose.connect('mongodb://localhost/binge-watch-bestie'); // connect to our database
var db = mongoose.connection;

db.on('error', function(err) { // not necessary, but good practice 
  console.error('Something went wrong...', err);
});

db.once('open', function() {
  console.log('Mongo database is connected.');
});

//// Express Server Initialization 
var router = express.Router(); 

router.use(function(req, res, next) {
  console.log('Express server starting...');
  next(); 
});

app.use('/api', router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/hello', function(req, res) {
  res.send('hello world');   
});

// Site Routes 
router.get('/search', searchController.search);
router.get('/login')
app.post('/api/users/signin', userController.signin);
app.post('/api/users/signup', userController.signup);

app.listen(port);
console.log('Magic happening on port ' + port);