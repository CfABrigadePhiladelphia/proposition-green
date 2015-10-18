angular.module('propGreen.requests')

.controller('RequestController',
['$routeParams', '$location', '$scope', 'RequestsService',
function($routeParams, $location, $scope, service) {
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
    if (!$scope.request.title || !$scope.request.desc) {
      alert('Missing required fields');
      return;
    }

    $scope.request.key = $scope.request.title.replace(/\W/g, '').toLowerCase();
    service.addRequest($scope.request);
    $location.path('/categories/' + $routeParams.category);
  };
}]);
