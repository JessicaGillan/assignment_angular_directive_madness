DM.controller("QuotesCtrl", ['$scope', function($scope) {
  $scope.quotes = [];

  $scope.deleteQuote = function(index, event) {
    event.preventDefault();
    $scope.quotes.splice(index, 1);
  };

  $scope.processQuoteForm = function(valid, quote) {
    if(valid) {
      var quote = {
        message: quote.message,
        author: quote.author
      }

      $scope.quotes.push(quote);
    }
  }
}]);
