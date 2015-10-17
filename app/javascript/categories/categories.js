angular.module('propGreen.categories', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categories', {
    templateUrl: 'javascript/categories/categories.html',
    controller: 'CategoriesController'
  });
}])

.controller('CategoriesController', ['$scope', function($scope) {
  $scope.categories = [
    'category1',
    'category2',
    'category3',
    'category4',
    'category5'
  ];
}]);
