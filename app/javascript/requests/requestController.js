angular.module('propGreen.requests')

.controller('RequestController',
['$routeParams', '$scope', 'RequestsService',
function($routeParams, $scope, service) {
  $scope.request = {
    title: '',
    key: '',
    desc: '',
    needs: []
  };

  service.getRequest($routeParams.request).then(function(request) {
    $scope.request = request;
  });

  $scope.addNeed = function() {
    $scope.request.needs.push($scope.newNeed);
    $scope.newNeed = '';
  };

  $scope.removeNeed = function(index) {
    $scope.request.needs.splice(index, 1);
  };

  $scope.addRequest = function() {
    service.addRequest($scope.request);
  };
}]);
