angular.module('propGreen', ['ngRoute', 'propGreen.categories'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  }).when('/', {
    templateUrl: 'scripts/categories/categories.html',
    controller: 'CategoriesController'
  });
}]);
