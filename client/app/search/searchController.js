angular.module('bingeWatch.search', []) 

.controller('SearchController', function($scope, SearchService) {
  $scope.results = [];
  $scope.search = function(search, type) {
    if (type === 'show') {
      SearchService.getShowResults(search).then(function(result) {
        $scope.results = result;
      });
    } else {
      SearchService.getMovieResults(search).then(function(result) {
        $scope.results = result;
      });
    }
    
  }
});