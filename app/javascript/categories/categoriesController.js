angular.module('propGreen.categories')

.controller('CategoriesController',
['$scope', 'categories',
function($scope, categories) {
  $scope.categories = categories;
}]);
