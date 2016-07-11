var request = require('request');

var baseUrl = 'https://api-public.guidebox.com/v1.43/US/rKGzUe0SOmAFla2ZBqbiICJMemzfxwhJ/search/movie/title/';

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
        image: result.poster_120x171,
        sources: result.free_web_sources
      }
    }));
  })
};

var tripleEncode = function(query) {
  return encodeURIComponent(encodeURIComponent(encodeURIComponent(query)));
};

module.exports = {search: search}; 