angular.module('bingeWatch.watchList', [])

.controller('ListController', function ($scope, SearchService) {
  
  SearchService.getList().then(function(result) {
    console.log(result);
    $scope.listResults = result;
  });
});
