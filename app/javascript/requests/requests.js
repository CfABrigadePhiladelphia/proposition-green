angular.module('propGreen.requests', [])

.service('RequestsService', ['$q', function($q) {
  return {
    getRequests: function(category_key) {
      var deferred = $q.defer();

      console.log('Getting requests for category:', category_key);
      deferred.resolve([
        {
          title: 'Clean park',
          desc: 'Halp',
          needs: ['shovel', 'trash bags']
        },
        {
          title: 'Shut down Comcast',
          desc: 'They are evil',
          needs: ['free internet']
        }
      ]);

      return deferred.promise;
    }
  };
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
})

.controller('RequestsController',
['$scope', 'RequestsService', function($scope, service) {
  service.getRequests($scope.category.key).then(function(requests) {
    $scope.requests = requests;
  });
}]);
