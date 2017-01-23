DM.directive('mouseText', function() {

  return {
    templateUrl: 'js/directives/mouse_text.html',
    restrict: 'E',
    link: function(scope, element, attrs){
      scope.handleMouseDown = function(){
        element[0].querySelector('#mouse-status').innerHTML = "Mouse DOWN";
      }

      scope.handleMouseUp = function(){
        element[0].querySelector('#mouse-status').innerHTML = "Mouse UP";
      }
    }
  }
});
