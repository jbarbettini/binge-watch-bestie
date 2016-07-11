var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var router = express.Router(); 
var port = 8080;   

//// Mongoose Initialization for Mongo 
mongoose.connect('mongodb://localhost/movie-list'); // connect to our database
var db = mongoose.connection;

db.on('error', function(err) { // not necessary, but good practice 
  console.error('Something went wrong...', err);
});

db.once('open', function() {
  console.log('Mongo database is connected.');
});

//// Express Server Initialization 
router.use(function(req, res, next) {
  console.log('Express server starting...');
  next(); 
});

app.use('/api', router);

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/hello', function(req, res) {
  res.send('hello world');   
});

app.listen(port);
console.log('Magic happening on port ' + port);