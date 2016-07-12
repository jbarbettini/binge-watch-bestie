angular.module('bingeWatch.search', []) 

.controller('SearchController', function($scope, SearchService) {
  $scope.results = [];
  $scope.search = function(search, type) {
    if (type === 'show') {
      SearchService.getShowResults(search).then(function(result) {
        $scope.results = result;
        $scope.height = 117;
        $scope.type = 'show';
        // $scope.sources = 
      });
    } else {
      SearchService.getMovieResults(search).then(function(result) {
        $scope.results = result;
        $scope.height = 171;
        $scope.type = 'movie';
        // $scope.sources = result.webSources;
      });
    } 
  }
  $scope.store = function(id, type) {
    console.log(id, type);
    SearchService.storeInList(id, type);
  }
});