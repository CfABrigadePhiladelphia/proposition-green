angular.module('propGreen', ['ngRoute', 'propGreen.categories'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  }).when('/', {
    templateUrl: 'javascript/categories/categories.html',
    controller: 'CategoriesController'
  });
}]);
