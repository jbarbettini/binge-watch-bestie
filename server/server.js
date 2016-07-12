var express = require('express');
var app = express(); 
var expressPromiseRouter = require("express-promise-router");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var List = require('./watchList/list');
var listController = require('./watchList/listController');
var searchMovieController = require('./search/searchMovieController');
var searchShowController = require('./search/searchShowController');

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
var router = expressPromiseRouter();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use(function(req, res, next) {
  console.log('Express server starting...');
  next(); 
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/hello', function(req, res) {
  res.send('hello world');   
});

// Site Routes 
router.get('/movieSearch', searchMovieController.search);
router.get('/showSearch', searchShowController.search);
router.post('/watchList', listController.store);
router.get('/watchList', listController.getList);

app.use('/api', router);

app.listen(port);
console.log('Magic happening on port ' + port);