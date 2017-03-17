
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, GoogleMaps) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    
  });
})

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

  $urlRouterProvider.otherwise('/home');

});