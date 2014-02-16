'use strict';

var ngComponents = angular.module('ngComponents', ['ngRoute']);


ngComponents.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/start', {
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
      }).
      when('/components', {
        templateUrl: 'views/components.html',
        controller: 'ComponentsCtrl'
      }).
      otherwise({
        redirectTo: '/',
        templateUrl: 'views/main.html'
      });
  }]);


ngComponents.controller('StartCtrl', function($scope) {

});


ngComponents.controller('ComponentsCtrl', function($scope) {

});

