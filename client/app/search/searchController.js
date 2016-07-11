angular.module('bingeWatch.search', []) 

.controller('SearchController', function($scope, SearchService) {
  $scope.results = [];
  $scope.search = function(search) {
    SearchService.getResults(search).then(function(result) {
      $scope.results = result;
    });
  }
});