angular.module('bingeWatch.services', [])

.factory('SearchService', function($http) {
  var getMovieResults = function(searchQuery) {
    return $http.get('/api/movieSearch?s=' + searchQuery).then(function(resp) {
      return resp.data;
    });
  }
  var getShowResults = function(searchQuery) {
    return $http.get('/api/showSearch?s=' + searchQuery).then(function(resp) {
      return resp.data;
    });
  }
  var storeInList = function(id, type) {
    return $http.post('api/watchList', { "id": id, "type": type }).then(function(resp) {
      return resp.data;
    });
  }
  var getList = function() {
    return $http.get('api/watchList').then(function(resp) {
      return resp.data;
    });
  }
  return {
    getMovieResults: getMovieResults, 
    getShowResults: getShowResults,
    storeInList: storeInList,
    getList: getList
  }
});