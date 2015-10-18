angular.module('propGreen.topnav', [])

.directive('topnav', function() {
  return {
    templateUrl: 'javascript/topnav/topnav.html',
    restrict: 'E',
    controller: 'TopnavController'
  };
})

.controller('TopnavController',
['$location', '$scope', function($location, $scope) {
  $scope.links = [
    {
      text: 'Link',
      link: 'link'
    }
  ];

  $scope.openLink = function(link) {
    $location.path(link);
  };
}]);
