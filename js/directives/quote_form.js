DM.directive('quoteForm', function() {
  return {
    templateUrl: '/js/directives/quote_form.html',
    scope: true,
    link: function functionName(scope, element) {
      scope.handleSubmit = function(quoteForm) {
        console.log(quoteForm)
        scope.processQuoteForm(quoteForm.$valid, scope.quote);
        if (quoteForm.$valid) {
          scope.quote = null;
        }

        quoteForm.$setPristine(); 
      }
    }
  }
});
