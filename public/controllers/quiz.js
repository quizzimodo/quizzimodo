angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, $location, Quiz, $rootScope) {	 

  $scope.questions = [];
  $scope.question = {question: '', answers: [{}, {}, {}, {}]};


  $scope.addQuestion = function() {
    $scope.questions.push($scope.question);

    console.log("this is questions", $scope.questions, "This is a question", $scope.question);
    $scope.question = {question: '', answers: [{}, {}, {}, {}]};


  };

  $scope.editQuestion = function() {
    $scope.currentQuestion = selectedquestion;
  }

  $scope.saveQuestion = function() {

  }
});