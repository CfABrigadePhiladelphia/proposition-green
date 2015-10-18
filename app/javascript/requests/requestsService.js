angular.module('propGreen.requests')

.service('RequestsService', ['$q', function($q) {
  var requests = [
    {
      title: 'Clean park',
      key: 'cleanpark',
      desc: 'Halp',
      needs: ['shovel', 'trash bags']
    },
    {
      title: 'My cat is stuck in a tree!',
      key: 'savecat',
      desc: 'Save my cat!',
      needs: ['ladder']
    }
  ];

  return {
    getRequests: function(category_key) {
      var deferred = $q.defer();

      console.log('Getting requests for category:', category_key);
      deferred.resolve(requests);

      return deferred.promise;
    },

    getRequest: function(request_key) {
      var deferred = $q.defer();

      var request = _.findWhere(requests, {key: request_key});
      if (request) {
        deferred.resolve(request);
      } else {
        deferred.reject('Not found');
      }

      return deferred.promise;
    },

    addRequest: function(request) {
      requests.push(request);
    }
  };
}]);
