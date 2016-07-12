var request = require('request');
var Promise = require('bluebird');

var baseUrl = 'https://api-public.guidebox.com/v1.43/US/rKGzUe0SOmAFla2ZBqbiICJMemzfxwhJ/search/title/';

// console.log(process.env.GUIDEBOX_KEY);

var search = function(req, res) {
  var searchQuery = tripleEncode(req.query.s);
  request(baseUrl + searchQuery, function(error, response, body) {
    if (error) {
      return error;
    }
    var resultsObj = JSON.parse(body); 
    res.json(resultsObj.results.map(function(result) {
      return {
        id: result.id,
        title: result.title,
        // image: result.poster_120x171
        image: result.artwork_208x117
        // sources: addContent(result.id)
      }
    }));
  })
};

var searchPromise = function(req, res) {
  var searchQuery = tripleEncode(req.query.s); 
  return new Promise(function(resolve, reject) {
    request.get(baseUrl + searchQuery, function(error, response, body) {
      if (err) {
        return reject(err); 
      }
      resolve(JSON.parse(body));
    });
  })
  .then(function(body) {
    request.get()
  });
};

var tripleEncode = function(query) {
  return encodeURIComponent(encodeURIComponent(encodeURIComponent(query)));
};

// var addContent = function(id) {
//   request('https://api-public.guidebox.com/v1.43/US/rKGzUe0SOmAFla2ZBqbiICJMemzfxwhJ/movie/' + id, function(error, response, body) {
//     if (error) {
//       return error;
//     }
//     var resultsObj = JSON.parse(body); 
//     response.json(resultsObj.results.map(function(result){
//       return {
//         source: result.subscription_web_sources
//       }
//     }));
//   })
// };

module.exports = {search: search}; 