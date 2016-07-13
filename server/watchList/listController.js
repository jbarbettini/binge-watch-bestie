var List = require('./list');
var config = require('../config');
var rp = require('request-promise');
var Promise = require('bluebird');

var movieURI = 'https://api-public.guidebox.com/v1.43/US/'+ config.apiKey + '/movie/';
var showURI = 'https://api-public.guidebox.com/v1.43/US/'+ config.apiKey +'/show/';

var store = function(req, res) {
  var listItem = new List();      
  listItem.id = req.body.id;
  listItem.type = req.body.type;  

  listItem.save(function(err) {
    if (err) {
      res.send(err);
    } 
    res.sendStatus(201);
  });
};

var getList = function(req, res) {
  List.find(function(err, listItems) {
    if (err) {
      res.send(err);
    }
    return Promise.map(listItems, function(item) {
      var options = {
        json: true
      }
      if (item.type === 'movie') {
        options.uri = movieURI + item.id; 
      } else { 
        options.uri = showURI + item.id;
      }
      return rp(options);
    }).then(function(details) {
      res.json(details.map(function(show) {
      return {
        id: show.id,
        title: show.title,
        overview: show.overview,
        image: show.artwork_304x171 || show.poster_240x342
      }
    }));
    });
  });
}

module.exports = {store: store, getList: getList};