angular.module('propGreen.categories', ['ngRoute', 'propGreen.requests'])

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
    key: 'food',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Water',
    key: 'water',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Air',
    key: 'air',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Energy',
    key: 'energy',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Emergency Preparedness',
    key: 'emergency',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Population Displacement',
    key: 'population',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Habitat Impact',
    key: 'habitat',
    img: 'images/category.png',
    desc: 'Lorem espom salt'
  }
]);
