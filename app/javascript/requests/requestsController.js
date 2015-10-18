angular.module('propGreen.requests')

.controller('RequestsController',
['$scope', 'RequestsService', function($scope, service) {
  service.getRequests($scope.category.key).then(function(requests) {
    $scope.requests = requests;
  });
}]);
