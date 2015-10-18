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
    desc: 'Regionally based Ideas, proposals and projects on how to address Emergency Response needs created by Climate Change.'
  },
  {
    name: 'Food',
    key: 'food',
    desc: 'Ideas, proposals and projects specific to the Region on addressing needs created by the impact of Climate Change on Food production.'
  },
  {
    name: 'Water',
    key: 'water',
    desc: 'Ideas, proposals and projects specific to the Region on addressing needs created by the impact of Climate Change on Water.'
  },
  {
    name: 'Air',
    key: 'air',
    desc: 'Ideas, proposals and projects specific to the Region on addressing needs created by the impact of Climate Change on Air.'
  },
  {
    name: 'Energy',
    key: 'energy',
    desc: 'Ideas, proposals and projects specific to the Region addressing Energy needs created by Climate Change.'
  },
  {
    name: 'Population Displacement',
    key: 'population',
    desc: 'Ideas, proposals and projects specific to the Region on addressing needs created by Population Displacement resulting from Climate Change.'
  },
  {
    name: 'Habitat Impact',
    key: 'habitat',
    desc: 'Ideas, proposals and projects specific to the Region on addressing needs created by the impact of Climate Change on human habitat.'
  }
]);
