'use strict';

var ngComponents = angular.module('ngComponents', ['ngRoute']);


ngComponents.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/components', {
        templateUrl: 'views/components.html',
        controller: 'ComponentsCtrl'
      }).
      otherwise({
        redirectTo: '/',
        templateUrl: 'views/main.html'
      });
  }]);


ngComponents.controller('ComponentsCtrl', function($scope, componentsList) {
  $scope.components = componentsList.list();
});

ngComponents.controller('NavCtrl', function($scope, $location) {
  $scope.isActive = function(route) {
    return route === $location.path();
  }
});

ngComponents.factory('componentsList', function () {
  var data = [
    {
      id: 'show_more',
      name: 'Show more'
    }
  ];

  return {
    list: function () {
      return data;
    }
  };
});