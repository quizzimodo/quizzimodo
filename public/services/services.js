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
    $location.path('/');
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

.factory('Quiz', function($http, $location) {
  var persistedData = {};

  var setData = function(data){
    persistedData = data;
  }

  var getData = function(data){
    return persistedData;
  }

  var getQuizzes = function() {
    return $http({
      method: 'GET',
      url: '/api/quizzes'
    })
    .then(function(resp) {
      return resp.data
    });
  };

  var getQuiz = function(quizID) {
    return $http({
      method: 'GET',
      url: '/api/quizzes/' + quizID
    })
    .then(function(resp) {
      return resp.data
    });
  };

  var postResults = function(quizResult) {
    return $http({
      method: 'POST',
      url: '/api/submit',
      data: quizResult
    })
    .then(function(resp) {
      return resp.data
    });
  };

  var postQuiz = function(quiz) {
    return $http({
      method: 'POST',
      url: '/api/quizzes',
      data: quiz 
    })
    .then(function(resp) {
      return resp.data
    });
  };

  return {
    getQuizzes: getQuizzes,
    getQuiz: getQuiz,
    postResults: postResults,
    postQuiz: postQuiz,
    setData: setData,
    getData: getData
  }
});


