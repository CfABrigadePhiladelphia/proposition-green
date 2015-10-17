angular.module('propGreen.categories', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categories', {
    templateUrl: 'javascript/categories/categories.html',
    controller: 'CategoriesController'
  });
}])

.controller('CategoriesController', ['$scope', function($scope) {
  $scope.categories = [
    {
      name: 'category1',
      img: 'images/category.png',
      desc: 'Lorem espom salt'
    },
    {
      name: 'category2',
      img: 'images/category.png',
      desc: 'Lorem espom salt'
    },
    {
      name: 'category3',
      img: 'images/category.png',
      desc: 'Lorem espom salt'
    },
    {
      name: 'category4',
      img: 'images/category.png',
      desc: 'Lorem espom salt'
    },
    {
      name: 'category5',
      img: 'images/category.png',
      desc: 'Lorem espom salt'
    },
    {
      name: 'category6',
      img: 'images/category.png',
      desc: 'Lorem espom salt'
    },
    {
      name: 'category7',
      img: 'images/category.png',
      desc: 'Lorem espom salt'
    }
  ];
}]);
