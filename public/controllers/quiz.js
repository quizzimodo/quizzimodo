angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, $location, Quiz, $rootScope) {	 

  $scope.quiz = {
    questions: []
  }

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

  }

  $scope.deleteQuestion = function() {
    console.log($scope.question.answers[0].answer);
    console.log(this.question.answers[0].answer);

  }

  $scope.updateQuestion = function(index) {
    //$scope.question.question = $scope.quiz.questions[index].question
    $scope.quiz.questions[$scope.index].question = $scope.question.question;
    $scope.quiz.questions[$scope.index].answers[0].answer = $scope.question.answers[0].answer;
    $scope.quiz.questions[$scope.index].answers[1].answer = $scope.question.answers[1].answer;
    $scope.quiz.questions[$scope.index].answers[2].answer = $scope.question.answers[2].answer;
    $scope.quiz.questions[$scope.index].answers[3].answer = $scope.question.answers[3].answer;
    
    console.log($scope.quiz.questions[index]);



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