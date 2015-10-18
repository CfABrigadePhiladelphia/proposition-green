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
    name: 'Emergency Preparedness',
    key: 'emergency',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Food',
    key: 'food',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Water',
    key: 'water',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Air',
    key: 'air',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Energy',
    key: 'energy',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Population Displacement',
    key: 'population',
    desc: 'Lorem espom salt'
  },
  {
    name: 'Habitat Impact',
    key: 'habitat',
    desc: 'Lorem espom salt'
  }
]);
