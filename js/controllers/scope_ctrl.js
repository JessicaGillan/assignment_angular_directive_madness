DM.controller('scopeCtrl', ['$scope', function($scope){
  $scope.ctrlScopePrimOne = "One Way String";
  $scope.ctrlScopePrimTwo = "Two way String";
  $scope.ctrlScopeObjOne = {
    test: "HELLO"
  };
  $scope.ctrlScopeObjTwo = {
    test: "HELLO"
  };

  $scope.sayHello = function(name) {
    console.log("Hello " + name);
  };
}]);
