angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, $location, Quiz, $rootScope) {	 

  $scope.questions = [];
  $scope.question = {question: '', answers: [{}, {}, {}, {}]};

  function checkFields () {
    if($('.ng-empty').length > 0 || $('input[type=radio]:checked').length === 0) {
      return false;
  }
    return true;
  };

  $scope.addQuestion = function() {
    if(checkFields()) {
      $scope.questions.push($scope.question);
      $scope.question = {question: '', answers: [{}, {}, {}, {}]};
    } else {
      alert('Please fill out the question and answer fields, and select a correct answer');
    }
  };

  $scope.editQuestion = function() {
    $scope.currentQuestion = selectedquestion;
  }

  $scope.saveQuestion = function() {

  }

  $scope.submitQuiz = function() {
    if(checkFields()) { 
      $scope.questions.title = $scope.quiz.quiz;
      $scope.questions.details = $scope.quiz.details;
      Quiz.postQuiz($scope.questions)
      .then(function() {
        alert('Quiz created!');
        $location.path('/main');
      })
      .catch(function(error) {
        console.error(error);
      });
    } else {
      alert('Please fill out the question and answer fields, and select a correct answer');
    }
  }
});