ngComponents.directive('confirm', function() {
  return {
    restrict: 'A',
    controller: 'confirmCtrl',
    link: function(scope, element, attr) {
      var message = attr.confirm || "Are you sure?";
      var clickAction = attr.confirmedAction;
      element.bind('click', function() {
        if (window.confirm(message)) {
          scope.$eval(clickAction)
        }
      });
    }
  };
});

ngComponents.controller('confirmCtrl', function($scope) {
  $scope.remove = function() {
    alert('Element has been removed')
  }
});