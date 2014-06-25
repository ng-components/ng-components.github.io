ngComponents.directive('scrolling', function() {
  return {
    restrict: 'A',
    controller: 'showMoreCtrl',
    link: function(scope, element, attr) {
      var raw = element[0];
      element.bind('scroll', function () {
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.$apply(attr.scrolling);
        }
      });
    }
  };
});

ngComponents.controller('showMoreCtrl', function($scope) {
  $scope.items = [];

  var counter = 0;
  $scope.loadMore = function() {
    for (var i = 0; i < 10; i++) {
      $scope.items.push({
        id: counter
      });
      counter += 1;
    }
  };

  $scope.loadMore();
});

