angular.module('propGreen.categories')

.controller('CategoryController',
['$routeParams', function($routeParams) {
  console.log('Category:', $routeParams.category);
}]);
