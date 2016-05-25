angular.module('quizzimodo.services', [])

.factory('Auth', function($http, $location, $window) {
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var signup = function(user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  var signout = function() {
    $window.localStorage.removeItem('com.quizzimodo');
    $location.path('/signin');
  };

  var isAuth = function() {
    return !!$window.localStorage.getItem('com.quizzimodo');
  };

  return {
    signin: signin,
    signup: signup,
    signout: signout,
    isAuth: isAuth
  }
})

.factory('Nav', function($http) {
  var getTopics = function() {
    return $http({
      method: 'GET',
      url: '/api/topics'
    })
    .then(function(resp) {
      return resp.data
    });
  }

  return {
    getTopics: getTopics
  }
});
