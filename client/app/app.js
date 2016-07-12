angular.module('bingeWatch', [
  // 'bingeWatch.users',
  'bingeWatch.services',
  'bingeWatch.search',
  'bingeWatch.login',
  'ngRoute'])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: 'app/users/users.html',
      controller: 'UsersController'
    })
    .when('/search', {
      templateUrl: 'app/search/search.html', 
      controller: "SearchController"
    })
    .when('/signin', {
      templateUrl: 'app/login/signin.html',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: 'app/login/signup.html',
      controller: 'LoginController'
    })
})