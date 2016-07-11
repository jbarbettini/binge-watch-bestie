angular.module('bingeWatch.services', [])

.factory('SearchService', function($http) {
  var getResults = function(searchQuery) {
    return $http.get('/api/search?s=' + searchQuery).then(function(resp) {
      return resp.data;
    });
  }
  return {
    getResults: getResults
  }
});