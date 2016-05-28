angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, $location, Quiz, $rootScope) {	 
  $scope.questions = [];

    $scope.addQuestion = function() {
    var correctAnswer = $('input[name=answerRadio]:checked', '#answerForm').val();
    var answerValues = [false, false, false, false];
    answerValues[correctAnswer] = true;
    
    $scope.questions.push({
      question: $scope.quiz.questions 
      // answer_options: [
      //   {$scope.quiz.answers0: answerValues[0]},
      //   {$scope.quiz.answers1: answerValues[1]},
      //   {$scope.quiz.answers2: answerValues[2]},
      //   {$scope.quiz.answers3: answerValues[3]}
      // ]
    });
    // clearFields();
    console.log('$scope.questions = ', $scope.questions);
  };

  // function clearFields () {
  //   $scope.questions = '';
  //   $scope.quiz.answers0 = '';
  //   $scope.quiz.answers1 = '';
  //   $scope.quiz.answers2 = '';
  //   $scope.quiz.answers3 = '';
  // };
});