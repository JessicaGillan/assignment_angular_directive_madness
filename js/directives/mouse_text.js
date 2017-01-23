DM.directive('mouseText', ['$window', function($window) {

  return {
    templateUrl: 'js/directives/mouse_text.html',
    restrict: 'E',
    link: function(scope, element, attrs){
      $window.document.onmousedown = function(){
        element[0].querySelector('#mouse-status').innerHTML = "Mouse DOWN";
      };

      $window.document.onmouseup = function(){
        element[0].querySelector('#mouse-status').innerHTML = "Mouse UP";
      };
    }
  }
}]);
