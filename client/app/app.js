angular.module('bingeWatch', [
  'bingeWatch.services',
  'bingeWatch.search',
  'bingeWatch.watchList',
  'ngMaterial',
  'ngRoute'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/watchList', {
      templateUrl: 'app/watchList/list.html',
      controller: 'ListController'
    })
    .when('/search', {
      templateUrl: 'app/search/search.html', 
      controller: "SearchController"
    })
})