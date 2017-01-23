DM.controller("QuotesCtrl", ['$scope', function($scope) {
  $scope.quotes = [];

  $scope.processQuoteForm = function(valid){
    console.log("process form!");
    console.log("$valid", valid);
    if(valid) {
      var quote = {
        message: $scope.message,
        author: $scope.author
      }

      $scope.quotes.push(quote);

      console.log("quotes", $scope.quotes);
      $scope.message = "";
      $scope.author = "";
    }
  }
}]);
