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
      text: 'About PropositionGreen',
      link: '/about'
    }
  ];

  $scope.openLink = function(link) {
    $location.path(link);
  };
}]);
