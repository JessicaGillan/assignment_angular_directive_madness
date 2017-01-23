DM.directive("copyright", function() {
  return {
    templateUrl: 'js/directives/copyright.html',
    restrict: 'E',
    transclude: true,
    scope: {
      year: '='
    },
    link: function(scope, elem, attributes) {
      elem[0].querySelector('#year').innerHTML = scope.year;
    }
  }
});
