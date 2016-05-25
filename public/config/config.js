angular.module('quizzimodo', [
  'quizzimodo.services',
  'quizzimodo.auth',
  //'quizzimodo.main',
  //'quizzimodo.quiz',
  //'quizzimodo.question',
  //'quizzimodo.user',
  'quizzimodo.nav',
  'ngMaterial',
  'ngMessages',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  //$urlRouterProvider.when('/', '/app');
  //$urlRouterProvider.when('', '/app');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'nav': {
          templateUrl: '../views/nav.html',
          controller: 'NavController'
        }
      }
    })
    .state('app.signin', {
      url: 'signin',
      views: {
        '': {
          templateUrl: '../views/signin.html',
          controller: 'AuthController'
        }
      }
    })
    .state('app.signup', {
      url: 'signup',
      views: {
        '': {
          templateUrl: '../views/signup.html',
          controller: 'AuthController'
        }
      }
    })
    .state('app.main', {
      url: 'main',
      views: {
        '': {
          templateUrl: '../views/main.html',
        },
        'sidebar': {
          templateUrl: '../views/sidebar.html',
          controller: 'SidebarController'
        }
      }
    })
    .state('app.main.user', {
      url: 'user',
      views: {
        '' : {
          templateUrl: '../views/user.html',
          controller: 'UserController'
        }
      }
    })
    .state('app.main.quiz', {
      url: 'quiz',
      views: {
        '': {
          templateUrl: '../views/quiz.html',
          controller: 'QuizController'
        }
      }
    })
    .state('app.main.question', {
      url: 'question',
      views: {
        '': {
          templateUrl: '../views/question.html',
          controller: 'QuestionController'
        }
      }
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
