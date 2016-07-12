angular.module('bingeWatch.services', [])

.factory('SearchService', function($http) {
  var getMovieResults = function(searchQuery) {
    return $http.get('/api/search?s=' + searchQuery).then(function(resp) {
      return resp.data;
    });
  }
  var getShowResults = function(searchQuery) {
    return $http.get('/api/search?s=' + searchQuery).then(function(resp) {
      return resp.data;
    });
  }
  return {
    getMovieResults: getMovieResults, 
    getShowResults: getShowResults
  }

});