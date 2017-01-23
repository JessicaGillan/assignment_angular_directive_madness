DM.directive('mouseText', function() {
  var handleMouseDown = function() {

  }

  return {
    templateUrl: 'js/directives/mouse_text.html',
    restrict: 'E',
    scope: {
      handleMouseDown: handleMouseDown
    }
  }
});