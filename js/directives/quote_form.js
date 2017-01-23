DM.directive('quoteForm', function() {
  return {
    templateUrl: '/js/directives/quote_form.html',
    scope: true,
    link: function functionName(scope, element) {
      scope.handleSubmit = function(valid) {
        scope.processQuoteForm(valid, scope.quote);
        if (valid) {
          scope.quote = null;
        }
      }
    }
  }
});
