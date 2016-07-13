angular.module('bingeWatch.watchList', [])

.controller('ListController', function ($scope, SearchService) {
  
  SearchService.getList().then(function(result) {
    console.log(result);
    $scope.listResults = result;

    console.log('movie', result.image);
    console.log('show', result.image);
    console.log(result.type);
    // if (result.artwork_304x171) {
    //   $scope.image = result.artwork_304x171;
    // } else {
    //   $scope.image = result.poster_240x342;
    // }
  });
});
