angular.module('propGreen.categories', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categories', {
    templateUrl: 'scripts/categories/categories.html',
    controller: 'CategoriesController'
  });
}])

.controller('CategoriesController', function() {
});
