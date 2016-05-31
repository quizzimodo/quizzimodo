angular.module('quizzimodo.quiz', [])

.controller('QuizController', function($scope, $location, Quiz, $rootScope) {	 

  $scope.topics = $rootScope.topics;
  
  $scope.$watch('topicPick', function(x){
    $scope.userTopic = $scope.topics[x]['topic'];
    $scope.subTopics = $scope.topics[x]['subtopics'];
  });

  $scope.$watch('subtopicPick', function(y){
    $scope.userSubtopic = $scope.subTopics[y];
    console.log('$scope.userSubtopic is: ', $scope.userSubtopic)

  });

  $scope.quiz = {
    questions: []
  }
  $scope.currentlyEditing = false;

  $scope.question = {question: '', answers: [{}, {}, {}, {}]};

  function checkQuestionFields () {
    if($('input[type=radio]:checked').length === 0 
      || $scope.question.question === ''
      || $scope.question.answers[0].answer === ''
      || $scope.question.answers[1].answer === ''
      || $scope.question.answers[2].answer === ''
      || $scope.question.answers[3].answer === ''
    ) {
      return false;
    }
      return true;
  };

  function clearFields() {
    $scope.question.question = '';
    for(var i = 0; i < $scope.question.answers.length; i++) {
      $scope.question.answers[i].answer = '';
    }
  }

  $scope.addQuestion = function() {
    if(checkQuestionFields()) {
      $scope.quiz.questions.push($scope.question);
      $scope.question = {question: '', answers: [{}, {}, {}, {}]};
    } else {
      alert('Please fill out the question and answer fields, and select a correct answer');
    }
  };

  $scope.editQuestion = function(index) {
    $scope.index = index;
    $scope.question.question = this.question.question;
    for(var i = 0; i < $scope.question.answers.length; i++) {
      $scope.question.answers[i].answer = this.question.answers[i].answer;
      $scope.question.answers[i].correct = this.question.answers[i].correct;
    }
    $scope.currentlyEditing = true;
  }

  $scope.deleteQuestion = function(index) {
    if(confirm("Are you sure you want to delete this question?")) {
      $scope.quiz.questions.splice(index, 1);
      clearFields();
      $scope.currentlyEditing = false;
    }
  }

  $scope.updateQuestion = function() {
    $scope.quiz.questions[$scope.index].question = $scope.question.question;
    for(var i = 0; i < $scope.quiz.questions[$scope.index].answers.length; i++) {
      $scope.quiz.questions[$scope.index].answers[i].answer = $scope.question.answers[i].answer;
    }
    clearFields();
    $scope.currentlyEditing = false;
  }

  $scope.submitQuiz = function() {
    // if(checkSubmitFields()) { 
      $scope.quiz.subtopic_id = $scope.userSubtopic.id;
      $scope.quiz.quiz = $scope.quizName;
      $scope.quiz.details = $scope.quizDetails;

      if ($('#publicCheckbox').is(':checked')) {
        $scope.quiz.public = true;
      }

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