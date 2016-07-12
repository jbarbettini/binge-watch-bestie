angular.module('bingeWatch.watchList', [])

.controller('ListController', function ($scope, SearchService) {
  // $scope.results = [];
  
  SearchService.getList().then(function(result) {
    console.log(result);
    $scope.results = result;
  });
});
