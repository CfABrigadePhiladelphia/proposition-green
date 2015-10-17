angular.module('propGreen.categories')

.service('CategoriesService',
['categories', function(categories) {
  return {
    category: function(category_key) {
      var category = _.findWhere(categories, {key: category_key});

      return category;
    }
  };
}]);
