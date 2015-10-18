angular.module('propGreen.categories')

.controller('CategoryController',
['$routeParams', 'CategoriesService',
function($routeParams, service) {
  console.log('Category:', service.category($routeParams.category));
}]);
