DM.directive('hoverText', function() {
  return {
    templateUrl: 'js/directives/hover_text.html',
    restrict: 'E',
    link: function(scope, element) {
      scope.handleMouseEnter = function() {
        element[0].querySelector('#hover-text').innerHTML = "Hovering";
      }

      scope.handleMouseLeave = function() {
        element[0].querySelector('#hover-text').innerHTML = "Hover me";
      }
    }
  }
});