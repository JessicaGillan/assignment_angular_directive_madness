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
      sayHelloDir: '&'
    }
  }
});
