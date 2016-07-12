angular.module('bingeWatch', [
  // 'bingeWatch.users',
  'bingeWatch.services',
  'bingeWatch.search',
  'bingeWatch.login',
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