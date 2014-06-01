ngComponents.directive('scrolling', function(){
  return function(scope, elm, attr){
    var raw = elm[0];

    elm.bind('scroll', function(){
      if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight){
        scope.$apply(attr.scrolling);
      }
    });
  };
});

ngComponents.controller('showMore', function($scope){
  $scope.items = [];

  var counter = 0;
  $scope.loadMore = function(){
    for (var i = 0; i < 10; i++){
      $scope.items.push({id: counter});
      counter += 1;
    }
  };

  $scope.loadMore();
});

