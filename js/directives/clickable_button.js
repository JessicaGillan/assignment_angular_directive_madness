DM.directive('clickableButton', function() {
  return {
    templateUrl: 'js/directives/clickable_button.html',
    restrict: 'E',
    link: function(scope, element) {
      scope.handleDoubleClick = function() {
        element[0].querySelector('#clickable').innerHTML = "double clicked"
      }
    }
  }
});