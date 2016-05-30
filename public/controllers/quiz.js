angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, $location, Quiz, $rootScope) {	 

  $scope.quiz = {
    questions: []
  }
  $scope.currentlyEditing = false;

  $scope.question = {question: '', answers: [{}, {}, {}, {}]};

  function checkFields () {
    if($('.ng-empty').length > 0 || $('input[type=radio]:checked').length === 0) {
      return false;
  }
    return true;
  };

  $scope.addQuestion = function() {
    //if(checkFields()) {
      $scope.quiz.questions.push($scope.question);
      $scope.question = {question: '', answers: [{}, {}, {}, {}]};
    // } else {
    //   alert('Please fill out the question and answer fields, and select a correct answer');
    // }
  };

  $scope.editQuestion = function(index) {
    $scope.index = index;
    $scope.question.question = this.question.question;
    $scope.question.answers[0].answer = this.question.answers[0].answer;
    $scope.question.answers[1].answer = this.question.answers[1].answer;
    $scope.question.answers[2].answer = this.question.answers[2].answer;
    $scope.question.answers[3].answer = this.question.answers[3].answer;
    $scope.currentlyEditing = true;

  }

  $scope.deleteQuestion = function(index) {
    if(confirm("Are you sure you want to delete this question?")) {
      $scope.quiz.questions.splice(index, 1);
    }
  }

  $scope.updateQuestion = function() {
    $scope.quiz.questions[$scope.index].question = $scope.question.question;
    $scope.quiz.questions[$scope.index].answers[0].answer = $scope.question.answers[0].answer;
    $scope.quiz.questions[$scope.index].answers[1].answer = $scope.question.answers[1].answer;
    $scope.quiz.questions[$scope.index].answers[2].answer = $scope.question.answers[2].answer;
    $scope.quiz.questions[$scope.index].answers[3].answer = $scope.question.answers[3].answer;
    $scope.currentlyEditing = false;
  }

  $scope.submitQuiz = function() {
    //if(checkFields()) { 
      
      $scope.quiz.quiz = $scope.quizName;
      $scope.quiz.details = $scope.quizDetails;
      Quiz.postQuiz($scope.quiz)
      .then(function() {
        alert('Quiz created!');
        $location.path('/main');
      })
      .catch(function(error) {
        console.error(error);
      });
    // } else {
    //   alert('Please fill out the question and answer fields, and select a correct answer');
    // }
  }
});