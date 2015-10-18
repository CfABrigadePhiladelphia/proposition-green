angular.module('propGreen.categories')

.controller('CategoryController',
['$routeParams', '$scope', 'CategoriesService',
function($routeParams, $scope, service) {
  $scope.category = service.category($routeParams.category);
}]);
