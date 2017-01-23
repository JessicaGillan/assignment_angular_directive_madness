DM.directive('scopeTest', function() {


  return {
    templateUrl: 'js/directives/scope_test.html',
    restrict: 'E',
    scope:
    {
      oneWayPrim: '@',
      twoWayPrim: '=',
      oneWayObj: '@',
      twoWayObj: '=',
    },
    link: function(scope, el, attrs) {
      scope.oneWayPrim = "CHANGED";
      scope.twoWayPrim = "CHANGED";
      scope.oneWayObj = "CHANGED";
      scope.twoWayObj.test = "CHANGED";
    }
  }
});
