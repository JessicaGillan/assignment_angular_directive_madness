DM.directive('colorize', function () {
  return {
    restrict: 'A',
    scope: {
      color: '@',
      background: '@'
    },
    link: function(scope, element, attrs) {
      element[0].style.color = scope.color;
      element[0].style.background = scope.background;
    }
  }
});
