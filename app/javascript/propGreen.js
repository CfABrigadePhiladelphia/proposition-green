angular.module('propGreen', [
  'ngRoute', 'propGreen.categories', 'propGreen.topnav'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/'
  }).when('/', {
    templateUrl: 'javascript/categories/categories.html',
    controller: 'CategoriesController'
  }).when('/about', {
    templateUrl: 'javascript/about/about.html',
  });
}]);

