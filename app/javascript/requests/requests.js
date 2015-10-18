angular.module('propGreen.requests', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categories/:category/requests/new', {
    templateUrl: 'javascript/requests/new.html',
    controller: 'RequestController'
  }).when('/categories/:category/requests/:request', {
    templateUrl: 'javascript/requests/request.html',
    controller: 'RequestController'
  });
}])

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
