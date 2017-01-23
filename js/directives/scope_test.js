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
      console.log("dir scope before",scope)
      scope.oneWayPrim = "CHANGED";
      scope.twoWayPrim = "CHANGED";
      scope.oneWayObj = "CHANGED";
      scope.twoWayObj.test = "CHANGED";
      console.log(typeof scope.oneWayObj)
      console.log("dir scope after", scope)
    }
  }
});
