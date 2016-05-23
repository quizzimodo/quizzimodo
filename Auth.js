angular.module('quizzimodo.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function() {
    Auth.signin($scope.user)
    .then(function (token) {
      //add localStorage.setItem command
      $location.path('/quizzes');
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  $scope.signup = function() {
    Auth.signup($scope.user)
    .then(function(token) {
      //add localStorage.setItem command
      $location.path('/quizzes');
    })
    .catch(function(error) {
      console.error(error);
    });
  };
});
