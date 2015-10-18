angular.module('propGreen.requests')

.controller('RequestController',
['$routeParams', '$scope', 'RequestsService',
function($routeParams, $scope, service) {
  service.getRequest($routeParams.request).then(function(request) {
    $scope.request = request;
  });
}]);
