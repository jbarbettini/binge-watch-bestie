var express = require('express');
var app = express(); 

var router = express.Router(); 
var port = 8080;   

router.use(function(req, res, next) {
  console.log('Express server starting...');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hello world'});   
});

app.listen(port);
console.log('Magic happens on port ' + port);