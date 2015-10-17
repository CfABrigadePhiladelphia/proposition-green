angular.module('propGreen.categories', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/categories', {
    templateUrl: 'javascript/categories/categories.html',
    controller: 'CategoriesController'
  }).when('/categories/:category', {
    templateUrl: 'javascript/categories/category.html',
    controller: 'CategoryController'
  });
}])

.value('categories', [
  {
    name: 'Food',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Water',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Air',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Energy',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Emergency Preparedness',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Population Displacement',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Habitat Impact',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  }
]);
