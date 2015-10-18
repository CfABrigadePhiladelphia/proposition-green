angular.module('propGreen.categories')

.controller('CategoriesController',
['$location', '$scope', 'categories',
function($location, $scope, categories) {
  $scope.categories = categories;

  $scope.openCategory = function(category) {
    $location.path('/categories/' + category.key);
  };
}]);
