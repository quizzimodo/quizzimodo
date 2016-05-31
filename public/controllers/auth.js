angular.module('quizzimodo.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth, $mdDialog, $rootScope) {

  $scope.user = {};

  var originatorEv;
  this.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };
  this.announceClick = function(index) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('You clicked!')
        .textContent('You clicked the menu item at index ' + index)
        .ok('Nice')
        .targetEvent(originatorEv)
    );
    originatorEv = null;
  };

  // TO DELETE
  // $scope.user = {
  //   id: 0,
  //   username: '',
  //   password: '',
  //   name: '',
  //   email: '',
  //   bio: ''
  // };
  
  $scope.signin = function() {
    Auth.signin($scope.user)
    .then(function (resp) {
      $window.localStorage.setItem('com.quizzimodo', resp.token);
      $rootScope.userID = resp.data.id;
      $location.path('/main');
    })
    .catch(function(error) {
      $scope.loginError = 'Incorrect username or password';
      console.error(error);
    });
  };

  $scope.signup = function(user, pass, name, email) {
    Auth.signup($scope.user)
    .then(function(resp) {
      $window.localStorage.setItem('com.quizzimodo', resp.token);
      $rootScope.userID = resp.data.id;
      $location.path('/main');
    })
    .catch(function(error) {
      $scope.signupError = 'User already exists';
      console.error(error);
    });
  };

  $scope.signout = function() {
    Auth.signout();
  };
  
});
