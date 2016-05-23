angular.module('quizzimodo', [
  'quizzimodo.auth',
  'quizzimodo.main',
  'quizzimodo.quiz',
  'quizzimodo.question',
  'quizzimodo.user',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: '../views/main.html',
      controller: 'MainController'
    })
    .when('/signin', {
      templateUrl: '../views/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: '../views/signup.html',
      controller: 'AuthController'
    })
    .when('/quiz', {
      templateUrl: '../views/quiz.html',
      controller: 'QuizController'
    })
    .when('/question', {
      templateUrl: '../views/question.html',
      controller: 'QuestionController'
    })
    .when('/user', {
      templateUrl: '../views/user.html',
      controller: 'UserController'
    })
    .otherwise({
      redirectTo: '/'
    });
  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.quizzimodo');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/signin');
    }
  });
});
