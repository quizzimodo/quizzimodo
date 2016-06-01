angular.module('quizzimodo.results', [])

.controller('ResultsController', function($scope, $location, Quiz, $rootScope) {
  
  $scope.quizResult = Quiz.getData();

  $scope.getResults = function(){
    $scope.quizName = $scope.quizResult.name;
    $scope.quizScore = $scope.quizResult.result * 100;
  };
  $scope.getResults();

  $scope.retake = function(){
    Quiz.setData($scope.quizResult.id);
    $location.path('/take_quiz');
  };

});