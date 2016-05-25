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
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        'nav': navView,
        'signin@app': signinView,
        '': {
          templateUrl: '../views/landing.html'
        }
      }
    })
    .state('signup', {
      url: '/signup',
      views: {
        'nav': navView,
        'signin@signup': signinView,
        '': {
          templateUrl: '../views/signup.html',
          controller: 'AuthController'
        }
      }
    })
    .state('main', {
      url: '/main',
      views: {
        'nav': navView,
        'signin@main': signinView,
        '': {
          templateUrl: '../views/main.html',
          controller: 'AuthController'
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

  var navView = {
          templateUrl: '../views/nav.html',
          controller: 'NavController'
        };

 var signinView = {
          templateUrl: '../views/signin.html',
          controller: 'AuthController'
        };
