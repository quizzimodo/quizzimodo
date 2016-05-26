angular.module('quizzimodo.auth', [])

.controller('AuthController', function($scope, $window, $location, Auth, $mdDialog) {

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

  $scope.signin = function(user, pass) {
    $scope.user = {
      username: user,
      password: pass
    };

    Auth.signin($scope.user)
    .then(function (user) {
      $window.localStorage.setItem('com.quizzimodo', user.token);
      $scope.user = user;
      $location.path('/main');
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  $scope.signup = function(user, pass, name, email) {
    $scope.user = {
      username: user,
      password: pass,
      name: name,
      email: email
    };

    Auth.signup($scope.user)
    .then(function(user) {
      $window.localStorage.setItem('com.quizzimodo', user.token);
      $scope.user = user;
      $location.path('/main');
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  $scope.signout = function() {
    Auth.signout();
  };
  
});
