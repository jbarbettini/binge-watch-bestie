var rp = require('request-promise');
var config = require('../config');
var Promise = require('bluebird');

var baseUrl = 'https://api-public.guidebox.com/v1.43/US/' + config.apiKey + '/search/movie/title/';


// var search = function(req, res) {
//   var searchQuery = tripleEncode(req.query.s);
//   request(baseUrl + searchQuery, function(error, response, body) {
//     if (error) {
//       return error;
//     }
//     var resultsObj = JSON.parse(body); 
//     res.json(resultsObj.results.map(function(result) {
//       return {
//         id: result.id,
//         title: result.title,
//         // image: result.poster_120x171
//         image: result.artwork_208x117
//         // sources: addContent(result.id)
//       }
//     }));
//   })
// };

var search = function(req, res) {
  var searchQuery = tripleEncode(req.query.s); 

  var options = {
    uri: baseUrl + searchQuery, 
    json: true
  };
  return Promise.try(function() {
    return rp(options);
  }).then(function(data) {
    return data.results.map(function(result) {
      return result.id;
    })
  }).then(function(ids) {
    return Promise.map(ids, function(id) {
      return lookupDetails(id);
    });
  }).then(function(moviesDetails) {
    res.json(moviesDetails.map(function(movie) {
      return {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        image: movie.poster_120x171, 
        webSources: movie.subscription_web_sources,
        freeSources: movie.free_web_sources,
        purchaseSources: movie.purchase_web_sources
      }
    }));
  });
};

var tripleEncode = function(query) {
  return encodeURIComponent(encodeURIComponent(encodeURIComponent(query)));
};

var lookupDetails = function(id) {
  var options = {
    uri: 'https://api-public.guidebox.com/v1.43/US/'+ config.apiKey + '/movie/' + id,
    json: true
  };
  return rp(options); 
};

module.exports = {search: search}; 