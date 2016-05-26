angular.module('quizzimodo.sidebar', [])

.controller('SidebarController', function ($scope, User) {
  $scope.data = {};
  $scope.getUserInfo = function() {
    User.getInfo()
    .then(function(user) {
      $scope.data.user = user;
    })
    .catch(function(error) {
      console.error(error);
    });
  };
  $scope.getUserInfo();
})
.factory('User', function($http) {
  var getInfo = function() {
    return $http({
      method: 'GET',
      url: '/api/userinfo'
    })
    .then(function(resp) {
      return resp.data;
    });
  }
})
