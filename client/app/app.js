angular.module('bingeWatch', [
  // 'bingeWatch.users',
  'bingeWatch.services',
  'bingeWatch.search',
  'ngRoute'])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    // .when('/users', {
    //   templateUrl: 'app/users/users.html',
    //   controller: 'UsersController'
    // })
    .when('/search', {
      templateUrl: 'app/search/search.html', 
      controller: "SearchController"
    })
})