angular.module('propGreen.requests', [])

.directive('requests', function() {
  return {
    templateUrl: 'javascript/requests/requests.html',
    restrict: 'E',
    controller: 'RequestsController',
    scope: {
      category: '='
    }
  };
});
