angular.module('propGreen.requests')

.controller('RequestsController',
['$routeParams', '$location', '$scope', 'RequestsService',
function($routeParams, $location, $scope, service) {
  service.getRequests($scope.category.key).then(function(requests) {
    $scope.requests = requests;
  });

  $scope.openRequest = function(request) {
    $location.path('/categories/' + $routeParams.category +
    '/requests/' + request.key);
  };

  $scope.newRequest = function() {
    $location.path('/categories/' + $routeParams.category +'/requests/new');
  };
}]);
