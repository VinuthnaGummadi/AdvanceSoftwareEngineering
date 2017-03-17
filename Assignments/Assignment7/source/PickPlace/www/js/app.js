// Ionic Starter App


angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
  .state('home', {
    url: '/home',
    templateUrl: 'views/home/home.html',
    controller: 'SettingsController'
  })

  .state('map', {
    url: '/map',
    templateUrl: 'views/map/map.html',
    controller: 'MapController'
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'views/login/login.html',
    controller: 'LoginController'
  })
  
  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup/signup.html',
    controller: 'SettingsController'
  })

  $urlRouterProvider.otherwise('/home');

});