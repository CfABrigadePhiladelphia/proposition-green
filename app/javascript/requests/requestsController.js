angular.module('propGreen.requests')

.controller('RequestsController',
['$location', '$scope', 'RequestsService',
function($location, $scope, service) {
  service.getRequests($scope.category.key).then(function(requests) {
    $scope.requests = requests;
  });

  $scope.openRequest = function(request) {
    $location.path('/requests/' + request.key);
  };
}]);
